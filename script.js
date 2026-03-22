const copy = {
  ko: {
    headline: "폐쇄된 시장이 아니라, 폐쇄된 분위기다.",
    summary:
      "실제 거래 기능은 없는 콘셉트 보드. 대신 금지된 포럼, 암시장 인덱스, 유출 로그 저장소 같은 분위기를 고급스럽게 재조합했다.",
    boardTitle: "현재 떠오르는 목록",
    boardNote: "클릭할수록 더 깊고 수상한 레이어가 열린다.",
    panelFoot: "주의: 실제 서비스가 아닌 연출용 인덱스입니다.",
    pulseButton: "목록 스캔",
    langButton: "EN",
    logs: {
      idle: [
        "> entry handshake complete",
        "> visual-only market shell mounted",
        "> awaiting scan request",
      ],
      ghost: [
        "> scanning ghost relay mirrors",
        "> relay signatures: unstable / mirrored / disposable",
        "> no live payload attached, visual shell only",
      ],
      archive: [
        "> archive shelves unfolding",
        "> cold folders tagged as sealed inventory",
        "> every asset shown here is atmosphere, not a real listing",
      ],
      broker: [
        "> broker thread opened",
        "> response latency intentionally stretched",
        "> trust score remains fictional and stylized",
      ],
      cold: [
        "> cold room latch released",
        "> passive warnings injected into channel",
        "> interior remains theatrical, not operational",
      ],
      pulse: [
        "> sweep started across four suspicious boards",
        "> signal intensity rising around featured tiles",
        "> shell switched to heightened watch mode",
      ],
    },
  },
  en: {
    headline: "Not a closed market. A carefully staged danger signal.",
    summary:
      "There is no real transaction layer here. This is a polished concept board built from the mood of sealed forums, black-market indexes, and leaked archive mirrors.",
    boardTitle: "Hot Listings On The Board",
    boardNote: "Each click opens a deeper and stranger visual layer.",
    panelFoot: "Notice: this is a visual concept board, not a live service.",
    pulseButton: "Scan Listings",
    langButton: "KR",
    logs: {
      idle: [
        "> entry handshake complete",
        "> visual-only market shell mounted",
        "> awaiting scan request",
      ],
      ghost: [
        "> scanning ghost relay mirrors",
        "> relay signatures: unstable / mirrored / disposable",
        "> no live payload attached, visual shell only",
      ],
      archive: [
        "> archive shelves unfolding",
        "> cold folders tagged as sealed inventory",
        "> every asset shown here is atmosphere, not a real listing",
      ],
      broker: [
        "> broker thread opened",
        "> response latency intentionally stretched",
        "> trust score remains fictional and stylized",
      ],
      cold: [
        "> cold room latch released",
        "> passive warnings injected into channel",
        "> interior remains theatrical, not operational",
      ],
      pulse: [
        "> sweep started across four suspicious boards",
        "> signal intensity rising around featured tiles",
        "> shell switched to heightened watch mode",
      ],
    },
  },
};

const shell = document.querySelector(".shell");
const headline = document.getElementById("headline");
const summary = document.getElementById("summary");
const boardTitle = document.getElementById("boardTitle");
const boardNote = document.getElementById("boardNote");
const panelFoot = document.getElementById("panelFoot");
const pulseButton = document.getElementById("pulseButton");
const langToggle = document.getElementById("langToggle");
const sessionValue = document.getElementById("sessionValue");
const channelValue = document.getElementById("channelValue");
const logValue = document.getElementById("logValue");
const listingGrid = document.getElementById("listingGrid");
const terminalBody = document.getElementById("terminalBody");
const terminalState = document.getElementById("terminalState");

let currentLanguage = "ko";

const listingDescriptions = {
  ko: {
    ghost: {
      title: "Ghost Relay",
      text: "익명 중계망 조각이 흔들리듯 떠오른다. 실제 기능은 없고, 오직 위험한 통로처럼 보이는 리듬만 남긴다.",
    },
    archive: {
      title: "Index Archive",
      text: "봉인된 보관함처럼 보이는 서랍 구조. 열람 순간 카드의 온도가 떨어지는 듯한 질감을 연출한다.",
    },
    broker: {
      title: "Broker Thread",
      text: "답장을 기다리는 중개 게시판처럼 보이도록 숫자와 상태 문장을 느리게 바꾼다.",
    },
    cold: {
      title: "Cold Room",
      text: "잠긴 방, 내부 규칙, 짧은 경고문. 가장 위험해 보이지만 실제론 연출 밀도가 가장 높은 카드다.",
    },
  },
  en: {
    ghost: {
      title: "Ghost Relay",
      text: "Anonymous relay fragments flicker into view. There is no function here, only the rhythm of a dangerous passage.",
    },
    archive: {
      title: "Index Archive",
      text: "A drawer system styled like a sealed vault. Opening it lowers the temperature of the card through motion and contrast.",
    },
    broker: {
      title: "Broker Thread",
      text: "Numbers and state lines shift slowly to mimic the delay of a broker board waiting to answer back.",
    },
    cold: {
      title: "Cold Room",
      text: "Locked room, internal rules, short warnings. It looks the most dangerous while remaining purely theatrical.",
    },
  },
};

function renderTerminal(lines) {
  terminalBody.innerHTML = "";

  lines.forEach((line) => {
    const row = document.createElement("p");
    row.textContent = line;
    terminalBody.appendChild(row);
  });
}

function applyLanguage() {
  const active = copy[currentLanguage];
  document.documentElement.lang = currentLanguage;
  headline.textContent = active.headline;
  summary.textContent = active.summary;
  boardTitle.textContent = active.boardTitle;
  boardNote.textContent = active.boardNote;
  panelFoot.textContent = active.panelFoot;
  pulseButton.textContent = active.pulseButton;
  langToggle.textContent = active.langButton;
  renderTerminal(active.logs.idle);
  terminalState.textContent = "idle";
}

function fluctuateMetrics() {
  sessionValue.textContent = String(240 + Math.floor(Math.random() * 40));
  channelValue.textContent = String(16 + Math.floor(Math.random() * 8));
  logValue.textContent = `${(4.2 + Math.random() * 1.4).toFixed(1)}TB`;
}

function activateMode(mode) {
  const lines = copy[currentLanguage].logs[mode];
  const info = listingDescriptions[currentLanguage][mode];
  renderTerminal(lines);
  terminalState.textContent = mode;
  fluctuateMetrics();
  shell.classList.add("is-alert");

  const cards = listingGrid.querySelectorAll(".listing");
  cards.forEach((card) => {
    const button = card.querySelector(".listing-button");
    card.classList.toggle("featured", button.dataset.mode === mode);

    if (button.dataset.mode === mode) {
      const title = card.querySelector("h3");
      const text = card.querySelector("p + p");
      title.textContent = info.title;
      text.textContent = info.text;
    }
  });

  window.clearTimeout(activateMode.timeoutId);
  activateMode.timeoutId = window.setTimeout(() => {
    shell.classList.remove("is-alert");
  }, 1400);
}

function pulseBoard() {
  fluctuateMetrics();
  renderTerminal(copy[currentLanguage].logs.pulse);
  terminalState.textContent = "sweep";
  shell.classList.add("is-alert");

  const cards = [...listingGrid.querySelectorAll(".listing")];
  cards.forEach((card, index) => {
    window.setTimeout(() => {
      card.style.transform = "translateY(-6px)";
      card.style.borderColor = "rgba(255, 223, 115, 0.32)";
      window.setTimeout(() => {
        card.style.transform = "";
        card.style.borderColor = "";
      }, 260);
    }, index * 100);
  });

  window.clearTimeout(pulseBoard.timeoutId);
  pulseBoard.timeoutId = window.setTimeout(() => {
    shell.classList.remove("is-alert");
  }, 1600);
}

langToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "ko" ? "en" : "ko";
  applyLanguage();
});

pulseButton.addEventListener("click", pulseBoard);

listingGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".listing-button");
  if (!button) {
    return;
  }

  activateMode(button.dataset.mode);
});

applyLanguage();
fluctuateMetrics();
