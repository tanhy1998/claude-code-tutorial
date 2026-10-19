/* Claude Code for PBIP: reusable lesson components.
 *
 * QUIZ: one correct answer, immediate feedback. Options are shuffled on every load.
 *   <div class="quiz" data-answer="b">
 *     <p class="q">Question?</p>
 *     <div class="options">
 *       <button data-key="a">…</button> <button data-key="b">…</button> …
 *     </div>
 *     <div class="feedback" data-for="b">Why b is right…</div>
 *     <div class="feedback" data-for="*">Shown for any wrong answer (optional).</div>
 *   </div>
 *   <p class="quiz-score"></p>   (optional; shows the running score for the page)
 *
 * RECALL: write from memory first, then reveal the model answer.
 *   <div class="recall"><p class="prompt">…</p><div class="model">…</div></div>
 *
 * CHECKLIST: real-world steps whose ticks persist in localStorage.
 *   <div class="checklist" data-id="lesson-0001-lab"><ol><li>…</li></ol></div>
 */
(function () {
  "use strict";

  function shuffle(nodes) {
    const arr = Array.from(nodes);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ---------- Quiz ----------
  const quizzes = document.querySelectorAll(".quiz");
  const scoreEls = document.querySelectorAll(".quiz-score");
  let answered = 0, correct = 0;

  function renderScore() {
    scoreEls.forEach((el) => {
      el.textContent = answered === 0
        ? `${quizzes.length} questions. Answer them from memory before you scroll back up.`
        : `Score: ${correct} / ${answered} answered (${quizzes.length} total).`;
    });
  }

  quizzes.forEach((quiz) => {
    const answer = quiz.dataset.answer;
    const options = quiz.querySelector(".options");
    shuffle(options.querySelectorAll("button")).forEach((b) => options.appendChild(b));

    options.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn || btn.disabled) return;
      const isRight = btn.dataset.key === answer;
      options.querySelectorAll("button").forEach((b) => {
        b.disabled = true;
        if (b.dataset.key === answer) b.classList.add("correct");
      });
      if (!isRight) btn.classList.add("wrong");

      quiz.querySelectorAll(".feedback").forEach((f) => f.classList.remove("show"));
      const specific = quiz.querySelector(`.feedback[data-for="${btn.dataset.key}"]`);
      const fallbackWrong = quiz.querySelector('.feedback[data-for="*"]');
      const explain = quiz.querySelector(`.feedback[data-for="${answer}"]`);
      const verdict = document.createElement("strong");
      verdict.className = isRight ? "ok" : "bad";
      verdict.textContent = isRight ? "Correct. " : "Not quite. ";
      const shown = isRight ? explain : (specific || fallbackWrong || explain);
      if (shown) {
        shown.prepend(verdict);
        shown.classList.add("show");
        if (!isRight && explain && shown !== explain) explain.classList.add("show");
      }
      answered++; if (isRight) correct++;
      renderScore();
    });
  });
  renderScore();

  // ---------- Recall ----------
  document.querySelectorAll(".recall").forEach((box) => {
    const model = box.querySelector(".model");
    const ta = document.createElement("textarea");
    ta.placeholder = "Write your answer from memory here, then reveal.";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Reveal model answer";
    btn.addEventListener("click", () => {
      model.classList.toggle("show");
      btn.textContent = model.classList.contains("show") ? "Hide model answer" : "Reveal model answer";
    });
    box.insertBefore(ta, model);
    box.insertBefore(btn, model);
  });

  // ---------- Checklist ----------
  document.querySelectorAll(".checklist").forEach((list) => {
    const key = "ccpbip:" + (list.dataset.id || location.pathname);
    let state = {};
    try { state = JSON.parse(localStorage.getItem(key) || "{}"); } catch (_) {}
    const items = list.querySelectorAll("ol > li");
    const progress = document.createElement("p");
    progress.className = "progress";

    function update() {
      const done = list.querySelectorAll("ol > li.done").length;
      progress.textContent = `${done} of ${items.length} steps done` + (done === items.length ? ". Nice work." : "");
    }

    items.forEach((li, i) => {
      const body = document.createElement("div");
      body.className = "step-body";
      while (li.firstChild) body.appendChild(li.firstChild);
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!state[i];
      cb.setAttribute("aria-label", `Step ${i + 1} done`);
      li.append(cb, body);
      li.classList.toggle("done", cb.checked);
      cb.addEventListener("change", () => {
        state[i] = cb.checked;
        localStorage.setItem(key, JSON.stringify(state));
        li.classList.toggle("done", cb.checked);
        update();
      });
    });
    list.appendChild(progress);
    update();
  });
})();
