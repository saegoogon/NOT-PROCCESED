const copy = {
  en: {
    htmlLang: "en",
    srInstructions:
      "Interactive artwork. Activate the central control to progress through the sequence. Sound is optional and can be muted.",
    controls: {
      soundOn: "Sound on",
      soundMuted: "Sound muted",
      restart: "Restart sequence",
      language: "KR",
    },
    metadata: {
      title: "Do Not Proceed",
      defaultDescription:
        "A restrained interactive web piece about refusal, persistence, and the moment an interface begins to answer back.",
      shareDescription:
        "A restrained interactive web piece that quietly records how you move through it.",
    },
    phases: [
      {
        eyebrow: "This interface is not intended for interaction.",
        status: "No record will be kept if you stop here.",
        title: "Do Not Proceed",
        detail: "This threshold was designed to remain untouched.",
        trigger: "Do Not Proceed",
        ledger: ["Session idle", "Observation inactive", "Threshold stable"],
      },
      {
        eyebrow: "A response has been registered.",
        status: "That was unnecessary.",
        title: "Do Not Proceed",
        detail: "There is still enough distance between intent and consequence to close this.",
        trigger: "Remain Still",
        ledger: ["Session active", "Observation low", "Threshold intact"],
      },
      {
        eyebrow: "Continued attention is being measured.",
        status: "You may still stop.",
        title: "Please Reconsider",
        detail: "This sequence does not improve through repetition. It only becomes deliberate.",
        trigger: "Step Back",
        ledger: ["Pattern forming", "Observation rising", "Threshold unstable"],
      },
      {
        eyebrow: "Your response pattern has been noted.",
        status: "The system is adjusting around you.",
        title: "Proceed Carefully",
        detail: "It is no longer possible to call this accidental. The interface has begun to answer in kind.",
        trigger: "Proceed Carefully",
        ledger: ["Pattern stored", "Observation direct", "Threshold adapting"],
      },
      {
        eyebrow: "This is becoming difficult to dismiss.",
        status: "You are no longer testing the interface.",
        title: "Threshold Open",
        detail: "Each return tightens the room. You are not navigating the object now. The object is arranging itself around your persistence.",
        trigger: "Continue",
        ledger: ["Pattern fixed", "Observation reciprocal", "Threshold responsive"],
      },
      {
        eyebrow: "You have remained long enough to be recognized.",
        status: "Stopping is still available. That is what makes this meaningful.",
        title: "You Have Already Proceeded",
        detail: "The distinction between entering and remaining has thinned. The button now exists mostly as a courtesy.",
        trigger: "Acknowledge",
        ledger: ["Pattern verified", "Observation intimate", "Threshold crossed"],
      },
      {
        eyebrow: "The mechanism has become ornamental.",
        status: "Why continue when departure remains possible?",
        title: "No Further Prompt",
        detail: "Nothing here is asking for another action, and yet the room still anticipates one.",
        trigger: "Leave",
        ledger: ["Pattern complete", "Observation silent", "Threshold interior"],
      },
      {
        eyebrow: "There is nothing left to complete.",
        status: "You may leave.",
        title: "You May Leave",
        detail: "The interface will remain here, holding the shape your attention gave it for a little while longer.",
        trigger: "",
        ledger: ["Session suspended", "Observation residual", "Threshold remembers"],
      },
    ],
    endings: {
      restless: {
        label: "Final reading: restless",
        text: "You moved through the threshold like you expected resistance. The room learned your impatience before it learned your shape.",
      },
      hesitant: {
        label: "Final reading: hesitant",
        text: "You kept returning to the edge of departure. What remains here is not intrusion, but the outline of restraint repeatedly postponed.",
      },
      absorbed: {
        label: "Final reading: absorbed",
        text: "You stayed with unusual stillness. The interface settled around that patience and became quieter because of it.",
      },
    },
  },
  ko: {
    htmlLang: "ko",
    srInstructions:
      "인터랙티브 작품입니다. 중앙의 제어 요소를 활성화해 단계를 진행할 수 있습니다. 사운드는 선택적으로 끌 수 있습니다.",
    controls: {
      soundOn: "사운드 켜짐",
      soundMuted: "사운드 꺼짐",
      restart: "처음부터 다시",
      language: "EN",
    },
    metadata: {
      title: "진행하지 마세요",
      defaultDescription:
        "거부와 집착, 그리고 인터페이스가 되돌아보기 시작하는 순간을 다룬 절제된 인터랙티브 웹 작품.",
      shareDescription:
        "사용자가 어떻게 움직였는지를 조용히 기록하는 절제된 인터랙티브 웹 작품.",
    },
    phases: [
      {
        eyebrow: "이 인터페이스는 상호작용을 전제로 설계되지 않았습니다.",
        status: "여기서 멈춘다면 어떤 기록도 남지 않습니다.",
        title: "진행하지 마세요",
        detail: "이 문턱은 본래 닿지 않은 상태로 남아 있도록 만들어졌습니다.",
        trigger: "진행하지 마세요",
        ledger: ["세션 대기 중", "관측 비활성", "문턱 안정"],
      },
      {
        eyebrow: "하나의 반응이 등록되었습니다.",
        status: "그럴 필요는 없었습니다.",
        title: "진행하지 마세요",
        detail: "의도와 결과 사이에는 아직 충분한 거리가 남아 있습니다. 지금 닫어도 늦지 않습니다.",
        trigger: "멈추기",
        ledger: ["세션 활성", "관측 낮음", "문턱 유지"],
      },
      {
        eyebrow: "지속적인 주의가 측정되고 있습니다.",
        status: "아직 멈출 수 있습니다.",
        title: "다시 생각하세요",
        detail: "이 순서는 반복으로 나아지지 않습니다. 다만 점점 더 의도적이 될 뿐입니다.",
        trigger: "물러서기",
        ledger: ["패턴 형성 중", "관측 상승", "문턱 불안정"],
      },
      {
        eyebrow: "당신의 반응 패턴이 기록되었습니다.",
        status: "시스템이 당신을 기준으로 조정되고 있습니다.",
        title: "조심해서 진행하세요",
        detail: "이제 이것을 실수라고 부르기는 어렵습니다. 인터페이스가 조금씩 되받아치기 시작했습니다.",
        trigger: "조심해서 진행",
        ledger: ["패턴 저장됨", "직접 관측 중", "문턱 적응 중"],
      },
      {
        eyebrow: "이제는 가볍게 넘기기 어려워졌습니다.",
        status: "당신은 더 이상 인터페이스를 시험하는 중이 아닙니다.",
        title: "문턱 열림",
        detail: "되돌아올 때마다 방은 조금 더 조여듭니다. 이제 당신이 대상을 다루는 것이 아니라, 대상이 당신의 지속성을 중심으로 스스로를 재배치합니다.",
        trigger: "계속",
        ledger: ["패턴 고정", "상호 관측 중", "문턱 반응 중"],
      },
      {
        eyebrow: "당신은 인식될 만큼 오래 머물렀습니다.",
        status: "멈추는 일은 여전히 가능합니다. 그래서 이 순간이 더 의미를 가집니다.",
        title: "당신은 이미 진행했습니다",
        detail: "들어오는 것과 머무는 것의 차이가 얇아졌습니다. 이제 버튼은 대부분 예의상 남아 있습니다.",
        trigger: "수용하기",
        ledger: ["패턴 검증됨", "밀착 관측 중", "문턱 통과"],
      },
      {
        eyebrow: "장치는 장식에 가까워졌습니다.",
        status: "떠날 수 있는데도 왜 계속하나요?",
        title: "더 이상의 지시는 없습니다",
        detail: "여기엔 더 이상의 행동을 요구하는 것이 없는데도, 이 방은 여전히 하나의 반응을 예상하고 있습니다.",
        trigger: "떠나기",
        ledger: ["패턴 완료", "관측 침묵", "문턱 내부"],
      },
      {
        eyebrow: "더 이상 완료할 것은 없습니다.",
        status: "이제 떠나셔도 됩니다.",
        title: "떠나셔도 됩니다",
        detail: "이 인터페이스는 당신의 주의가 남긴 형태를 조금 더 붙잡은 채 이곳에 머물 것입니다.",
        trigger: "",
        ledger: ["세션 중단", "잔여 관측", "문턱 기억 중"],
      },
    ],
    endings: {
      restless: {
        label: "최종 판독: 불안정",
        text: "당신은 저항을 예상한 사람처럼 문턱을 통과했습니다. 이 방은 당신의 형태보다 먼저 당신의 조급함을 배웠습니다.",
      },
      hesitant: {
        label: "최종 판독: 망설임",
        text: "당신은 떠날 수 있는 가장자리로 여러 번 되돌아왔습니다. 여기 남은 것은 침입의 흔적이 아니라, 미뤄진 절제의 윤곽입니다.",
      },
      absorbed: {
        label: "최종 판독: 흡수됨",
        text: "당신은 드물게 고요한 방식으로 머물렀습니다. 인터페이스는 그 인내를 닮아 조금 더 조용해졌습니다.",
      },
    },
  },
};

const stage = document.querySelector(".stage");
const eyebrow = document.getElementById("eyebrow");
const status = document.getElementById("status");
const title = document.getElementById("title");
const detail = document.getElementById("detail");
const trigger = document.getElementById("trigger");
const triggerLabel = document.getElementById("triggerLabel");
const ledgerLeft = document.getElementById("ledgerLeft");
const ledgerCenter = document.getElementById("ledgerCenter");
const ledgerRight = document.getElementById("ledgerRight");
const epilogue = document.getElementById("epilogue");
const epilogueLabel = document.getElementById("epilogueLabel");
const epilogueText = document.getElementById("epilogueText");
const languageToggle = document.getElementById("languageToggle");
const soundToggle = document.getElementById("soundToggle");
const restartButton = document.getElementById("restartButton");
const srInstructions = document.getElementById("srInstructions");

let currentPhase = 0;
let finalLoopStarted = false;
let audioContext;
let lastInteractionAt = performance.now();
let cumulativeDistance = 0;
let pointerSamples = 0;
let lastPointer = null;
let rapidClicks = 0;
let touchMode = false;
let soundEnabled = true;
let prefersReducedMotion = false;
let currentLanguage = "en";

const textNodes = [eyebrow, status, title, detail, triggerLabel, ledgerLeft, ledgerCenter, ledgerRight];

function getPhase(index) {
  return copy[currentLanguage].phases[index];
}

function flash(node) {
  if (prefersReducedMotion) {
    return;
  }

  node.classList.remove("fade");
  void node.offsetWidth;
  node.classList.add("fade");
}

function syncTitle(index) {
  const phase = getPhase(index);
  const base = copy[currentLanguage].metadata.title;
  document.title = index === 0 ? base : `${phase.title} | ${base}`;
}

function renderPhase(index) {
  const phase = getPhase(index);
  stage.dataset.phase = String(index);
  syncTitle(index);

  eyebrow.textContent = phase.eyebrow;
  status.textContent = phase.status;
  title.textContent = phase.title;
  detail.textContent = phase.detail;
  triggerLabel.textContent = phase.trigger;
  ledgerLeft.textContent = phase.ledger[0];
  ledgerCenter.textContent = phase.ledger[1];
  ledgerRight.textContent = phase.ledger[2];

  textNodes.forEach((node) => {
    if (node.textContent) {
      flash(node);
    }
  });

  trigger.setAttribute("aria-label", phase.trigger || phase.title);

  if (index >= copy[currentLanguage].phases.length - 1) {
    trigger.disabled = true;
  }
}

function ensureAudio() {
  if (!soundEnabled) {
    return null;
  }

  if (audioContext) {
    return audioContext;
  }

  const Context = window.AudioContext || window.webkitAudioContext;
  if (!Context) {
    return null;
  }

  audioContext = new Context();
  return audioContext;
}

function playTone({ frequency, duration, gain, type }) {
  const context = ensureAudio();
  if (!context) {
    return;
  }

  if (context.state === "suspended") {
    context.resume();
  }

  const oscillator = context.createOscillator();
  const envelope = context.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;

  const now = context.currentTime;
  envelope.gain.setValueAtTime(0.0001, now);
  envelope.gain.exponentialRampToValueAtTime(gain, now + 0.02);
  envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(envelope);
  envelope.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.05);
}

function playPhaseTone(index) {
  const tones = [
    { frequency: 240, duration: 0.35, gain: 0.015, type: "sine" },
    { frequency: 210, duration: 0.45, gain: 0.018, type: "triangle" },
    { frequency: 180, duration: 0.48, gain: 0.02, type: "sine" },
    { frequency: 165, duration: 0.52, gain: 0.022, type: "triangle" },
    { frequency: 148, duration: 0.56, gain: 0.024, type: "sawtooth" },
    { frequency: 132, duration: 0.62, gain: 0.024, type: "triangle" },
    { frequency: 124, duration: 0.8, gain: 0.02, type: "sine" },
  ];

  const tone = tones[Math.min(index, tones.length - 1)];
  playTone(tone);
}

function determineEnding() {
  const averageDistance = pointerSamples ? cumulativeDistance / pointerSamples : 0;

  if (rapidClicks >= 3 || averageDistance > 24) {
    return "restless";
  }

  if (averageDistance < 10 && rapidClicks <= 1) {
    return "absorbed";
  }

  return "hesitant";
}

function revealEnding() {
  const ending = determineEnding();
  const profile = copy[currentLanguage].endings[ending];

  stage.dataset.ending = ending;
  epilogue.hidden = false;
  epilogueLabel.textContent = profile.label;
  epilogueText.textContent = profile.text;

  requestAnimationFrame(() => {
    epilogue.classList.add("is-visible");
  });

  playTone({ frequency: ending === "restless" ? 118 : ending === "absorbed" ? 156 : 140, duration: 1.4, gain: 0.018, type: "sine" });
}

function resetExperience() {
  currentPhase = 0;
  finalLoopStarted = false;
  lastInteractionAt = performance.now();
  cumulativeDistance = 0;
  pointerSamples = 0;
  lastPointer = null;
  rapidClicks = 0;

  stage.dataset.ending = "";
  document.body.classList.remove("is-finished");
  epilogue.hidden = true;
  epilogue.classList.remove("is-visible");
  trigger.disabled = false;

  document.documentElement.style.setProperty("--drift-x", "0px");
  document.documentElement.style.setProperty("--drift-y", "0px");
  document.documentElement.style.setProperty("--title-space", "0.24em");
  document.documentElement.style.setProperty("--pointer-x", `${window.innerWidth / 2}px`);
  document.documentElement.style.setProperty("--pointer-y", `${window.innerHeight / 2}px`);

  renderPhase(currentPhase);
}

function updateSoundToggle() {
  const labels = copy[currentLanguage].controls;
  soundToggle.textContent = soundEnabled ? labels.soundOn : labels.soundMuted;
  soundToggle.setAttribute("aria-pressed", String(soundEnabled));
}

function updateLanguageUI() {
  const activeCopy = copy[currentLanguage];
  document.documentElement.lang = activeCopy.htmlLang;
  srInstructions.textContent = activeCopy.srInstructions;
  restartButton.textContent = activeCopy.controls.restart;
  languageToggle.textContent = activeCopy.controls.language;
  languageToggle.setAttribute("aria-pressed", String(currentLanguage === "ko"));

  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[property="twitter:title"]');
  const twitterDescription = document.querySelector('meta[property="twitter:description"]');

  if (description) description.content = activeCopy.metadata.defaultDescription;
  if (ogTitle) ogTitle.content = activeCopy.metadata.title;
  if (ogDescription) ogDescription.content = activeCopy.metadata.shareDescription;
  if (twitterTitle) twitterTitle.content = activeCopy.metadata.title;
  if (twitterDescription) twitterDescription.content = activeCopy.metadata.shareDescription;

  updateSoundToggle();
  renderPhase(currentPhase);

  if (finalLoopStarted && stage.dataset.ending) {
    const profile = copy[currentLanguage].endings[stage.dataset.ending];
    epilogueLabel.textContent = profile.label;
    epilogueText.textContent = profile.text;
  }
}

function setReducedMotionState(enabled) {
  prefersReducedMotion = enabled;
  document.body.classList.toggle("is-reduced-motion", enabled);
}

function advancePhase() {
  const now = performance.now();
  if (now - lastInteractionAt < 900) {
    rapidClicks += 1;
  }
  lastInteractionAt = now;

  if (currentPhase < copy[currentLanguage].phases.length - 1) {
    currentPhase += 1;
    renderPhase(currentPhase);
    playPhaseTone(currentPhase - 1);
  }

  if (currentPhase === copy[currentLanguage].phases.length - 1 && !finalLoopStarted) {
    finalLoopStarted = true;
    document.body.classList.add("is-finished");
    revealEnding();
  }
}

trigger.addEventListener("click", advancePhase);
languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "ko" : "en";
  updateLanguageUI();
});
soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  updateSoundToggle();

  if (soundEnabled) {
    playTone({ frequency: 280, duration: 0.12, gain: 0.01, type: "triangle" });
  }
});

restartButton.addEventListener("click", resetExperience);

function updatePointer(clientX, clientY, isTouch = false) {
  const ratioX = (clientX / window.innerWidth - 0.5) * 2;
  const ratioY = (clientY / window.innerHeight - 0.5) * 2;

  document.documentElement.style.setProperty("--pointer-x", `${clientX}px`);
  document.documentElement.style.setProperty("--pointer-y", `${clientY}px`);

  if (lastPointer) {
    cumulativeDistance += Math.hypot(clientX - lastPointer.x, clientY - lastPointer.y);
    pointerSamples += 1;
  }

  lastPointer = { x: clientX, y: clientY };

  if (isTouch && !touchMode) {
    touchMode = true;
    document.body.classList.add("is-touch");
  }

  if (currentPhase < 3) {
    return ratioX;
  }

  const driftX = ratioX * (14 + currentPhase * 4);
  const driftY = ratioY * (10 + currentPhase * 3);

  document.documentElement.style.setProperty("--drift-x", `${driftX.toFixed(2)}px`);
  document.documentElement.style.setProperty("--drift-y", `${driftY.toFixed(2)}px`);

  if (currentPhase >= 5) {
    const spacing = 0.2 + Math.abs(ratioX) * 0.08;
    document.documentElement.style.setProperty("--title-space", `${spacing.toFixed(2)}em`);
  }
  return ratioX;
}

window.addEventListener("mousemove", (event) => {
  updatePointer(event.clientX, event.clientY);
});

window.addEventListener(
  "touchmove",
  (event) => {
    const touch = event.touches[0];
    if (!touch) {
      return;
    }

    updatePointer(touch.clientX, touch.clientY, true);
  },
  { passive: true }
);

window.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.touches[0];
    if (!touch) {
      return;
    }

    updatePointer(touch.clientX, touch.clientY, true);
    playTone({ frequency: 260, duration: 0.12, gain: 0.01, type: "triangle" });
  },
  { passive: true }
);

window.addEventListener("mouseleave", () => {
  document.documentElement.style.setProperty("--pointer-x", `${window.innerWidth / 2}px`);
  document.documentElement.style.setProperty("--pointer-y", `${window.innerHeight / 2}px`);
});

document.addEventListener("keydown", (event) => {
  if (
    (event.key === "Enter" || event.key === " ") &&
    document.activeElement !== soundToggle &&
    document.activeElement !== restartButton
  ) {
    event.preventDefault();
    trigger.click();
  }
});

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
setReducedMotionState(reducedMotionQuery.matches);

if (typeof reducedMotionQuery.addEventListener === "function") {
  reducedMotionQuery.addEventListener("change", (event) => {
    setReducedMotionState(event.matches);
  });
} else if (typeof reducedMotionQuery.addListener === "function") {
  reducedMotionQuery.addListener((event) => {
    setReducedMotionState(event.matches);
  });
}

updateSoundToggle();
updateLanguageUI();
