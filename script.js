console.log("ended-timers: Oct 6, 2025 - TEST-1");
//....................................................................
//GLOBAL DEFINITIONS
let blackoutFlag = true;
const FEATURE_MAIN_VID_REPLAY = 5000;
const DATASHEET_BUTTON_TIMER = 1500;
const FADE_IN_COMPONENTS_HEADING = 25;
const FADE_IN_DATASHEETS_GRID = 200;
const FLASH_BLACKOUT = 50;
const FLASH_START_BLACKOUT = 500;
const PLAY_DATASHEET_VID_AFTER_DELAY = 200;
const PAUSE_BETWEEN_INSTRUCTION_VIDS = 2000;
//....................................................................
const navBar = document.querySelector(".nav_menu");
const navLinkFeatures = document.querySelector(".nav_menu_link.features");
const navLinkComponents = document.querySelector(".nav_menu_link.components");
const navLinkDatasheets = document.querySelector(".nav_menu_link.datasheets");
const navLinkInstructions = document.querySelector(
  ".nav_menu_link.instructions"
);
const allNavLinks = document.querySelectorAll(".nav_menu_link");
const blackout = document.querySelector(".blackout");
const sectionFeatures = document.querySelector(".section_features");
const sectionComponents = document.querySelector(".section_components");
const sectionDatasheets = document.querySelector(".section_datasheets");
const sectionInstructions = document.querySelector(".section_instructions");
const allSections = [
  sectionFeatures,
  sectionComponents,
  sectionDatasheets,
  sectionInstructions,
];
const ctrlBtnWrapper = document.querySelector(".ctrl-btn-wrapper");
const allButtonsFeatures = document.querySelectorAll(".ctrl-btn.features");
const allButtonsComponents = document.querySelectorAll(".ctrl-btn.components");
const allButtonsDatasheets = document.querySelectorAll(".ctrl-btn.datasheets");
const allButtonsInstructions = document.querySelectorAll(
  ".ctrl-btn.instructions"
);
const allCtrlButtons = [
  ...allButtonsFeatures,
  ...allButtonsComponents,
  ...allButtonsDatasheets,
  ...allButtonsInstructions,
];
let activeSection;
let activeSectionName;
let activeFullWrapper;
let activeFullWrapperIndex;
let allFullWrappers;
let endVidFlag;
//....................................................................
//FEATURES DEFINITIONS
const allFullWrappersFeatures =
  sectionFeatures.querySelectorAll(".full-wrapper");
const allTextWrappersFeatures =
  sectionFeatures.querySelectorAll(".text-wrapper");
const allVidWrappersFeatures =
  sectionFeatures.querySelectorAll(".video-wrapper");
const allVidsFeatures = document.querySelectorAll(".vid.features");
const allVidsFeaturesMobileP = document.querySelectorAll(
  ".vid.features-mobile-p"
);
const allEndVidsFeatures = document.querySelectorAll(".vid.features-end");
const allEndVidsFeaturesMobileP = document.querySelectorAll(
  ".features-end-mobile-p"
);
const allSectionVidsFeatures = [
  ...allVidsFeatures,
  ...allVidsFeaturesMobileP,
  ...allEndVidsFeatures,
  ...allEndVidsFeaturesMobileP,
];
let activeFullWrapperFeatures;
let vidName;
let newTimer;
//....................................................................
//COMPONENTS DEFINITIONS
const allFullWrappersComponents =
  sectionComponents.querySelectorAll(".full-wrapper");
const allButtonsDatalinks = document.querySelectorAll(".button-datalink");
const componentHeaderMain = "Explode/Assemble";
const componentTextMain =
  "Hover/click the dots for details about particular components. Use buttons below for exploded/assembled views.";
const allTextWrappersComponents =
  sectionComponents.querySelectorAll(".text-wrapper");
const allDotsComponents = document.querySelectorAll(".map_dot");
const allVidsComponents = document.querySelectorAll(".vid.components");
const allVidsComponentsMobileP = document.querySelectorAll(
  ".vid.components-mobile-p"
);
const allSectionVidsComponents = [
  ...allVidsComponents,
  ...allVidsComponentsMobileP,
];
const buttonComponentsExplode = document.querySelector(
  ".ctrl-btn.components.explode"
);
const buttonComponentsAssemble = document.querySelector(
  ".ctrl-btn.components.assemble"
);
const fullWrapperExplode = sectionComponents.querySelector(
  ".full-wrapper.explode"
);
let activeFullWrapperComponents;
let componentsType;
let datasheetButtonTimer;
let explodeOrAssemble = "explode";
let compNumberString;
let compContentActive = false;

//....................................................................
//DATASHEETS DEFINITIONS;
const allFullWrappersDatasheets = document.querySelectorAll(
  ".full-wrapper.datasheet"
);
const buttonDatasheetsBack = document.querySelector(
  ".ctrl-btn.datasheets.back"
);
const gridDatasheets = document.querySelector(".datasheets-grid");
const allVidsDatasheets = document.querySelectorAll(".vid.datasheets");
const allVidsDatasheetsMobileP = document.querySelectorAll(
  ".vid.datasheets-mobile-p"
);
const allSectionVidsDatasheets = [
  ...allVidsDatasheets,
  ...allVidsDatasheetsMobileP,
];
const allButtonsTextImage = document.querySelectorAll(".text-image-btn");
const allDatasheetSubHeadings = document.querySelectorAll(
  ".datasheet-subheading"
);
const allDatasheetText = document.querySelectorAll(".datasheet-text");

let activeFullWrapperDatasheets;
let imageTextFlag = "text";
let fromExplodeAssemble = false;
let datasheetIndex;
//....................................................................
//INSTRUCTIONS DEFINITIONS;
const allFullWrappersInstructions =
  sectionInstructions.querySelectorAll(".full-wrapper");
const textWrapperInstructions =
  sectionInstructions.querySelector(".text-wrapper");
const allVidsInstructions = document.querySelectorAll(".vid.instructions");
const allVidsInstructionsMobileP = document.querySelectorAll(
  ".vid.instructions-mobile-p"
);
const allSectionVidsInstructions = [
  ...allVidsInstructions,
  ...allVidsInstructionsMobileP,
];
const allClickDivs = document.querySelectorAll(".click-div");
const pauseWrapper = document.querySelector(".pause-wrapper");
let activeFullWrapperInstructions;
let currentVid = 1;
let instructionVidTimer;
let pauseFlag = false;
let instructionVidLooping = false;
//....................................................................
//COLLECTION DEFINITIONS
const allVideos = [
  ...allSectionVidsFeatures,
  ...allSectionVidsComponents,
  ...allSectionVidsDatasheets,
  ...allSectionVidsInstructions,
];
//....................................................................
blackout.classList.remove("off");
document.querySelector(".nav_component").style.display = "none";
window.addEventListener("load", function () {
  navLinkInstructions.click();
  navLinkDatasheets.click();
  navLinkComponents.click();
  navLinkFeatures.click();
  blackoutFlag = false;
  this.setTimeout(function () {
    this.document.querySelector(".nav_component").style.display = "flex";
    blackout.classList.add("off");
  }, FLASH_START_BLACKOUT);
});
//....................................................................
//GLOBAL FUNCTIONS
const DeactivateAllSections = function () {
  allSections.forEach(function (el) {
    el.classList.remove("active");
  });
};
const DeactivateAllFullWrappers = function () {
  allSections.forEach(function (el) {
    el.querySelectorAll(".full-wrapper").forEach(function (el2) {
      el2.classList.remove("active");
    });
  });
};
const DeactivateAllButtons = function () {
  allCtrlButtons.forEach(function (el) {
    el.classList.remove("active");
  });
};
const ResetAllVideos = function () {
  allVideos.forEach(function (el) {
    el.currentTime = 0;
    el.pause();
  });
};
const SetSectionFullWrapper = function (activeSection, sectionName) {
  switch (sectionName) {
    case "features":
      activeSection.querySelector(".full-wrapper.main").classList.add("active");
      break;
    case "components":
      activeSection
        .querySelector(`.full-wrapper.${explodeOrAssemble}`)
        .classList.add("active");
      break;
    case "datasheets":
      break;
    case "instructions":
      activeSection
        .querySelector(".full-wrapper.step-1")
        .classList.add("active");
      break;
  }
  allFullWrappers = activeSection.querySelectorAll(".full-wrapper");
  allFullWrappers.forEach(function (el, index) {
    if (el.classList.contains("active")) {
      activeFullWrapper = el;
      activeFullWrapperIndex = index;
    }
  });
};
const SetSectionText = function (activeSection, sectionName) {
  activeSection.querySelectorAll(".text-wrapper").forEach(function (el) {
    el.classList.remove("active");
  });
  switch (sectionName) {
    case "features":
      activeSection
        .querySelector(".full-wrapper.main")
        .querySelector(".text-wrapper")
        .classList.add("active");
      break;
    case "components":
      activeSection
        .querySelector(`.full-wrapper.${explodeOrAssemble}`)
        .querySelector(".text-wrapper")
        .classList.add("active");
      break;
    case "datasheets":
      allDatasheetSubHeadings.forEach((el) => el.classList.add("active"));
      allDatasheetText.forEach((el) => el.classList.add("active"));
      break;
    case "instructions":
      activeSection.querySelector(".text-wrapper").classList.add("active");
      break;
  }
};
const SetSectionSpecialElements = function (sectionName) {
  switch (sectionName) {
    case "features":
      break;
    case "components":
      activeFullWrapperComponents = activeFullWrapper;
      activeFullWrapper.querySelector(".dots-wrapper").classList.add("active");
      SetAllDatasheets(false);
      componentsType = "";
      break;
    case "datasheets":
      imageTextFlag = "text";
      allButtonsTextImage.forEach(
        (el) => (el.querySelector(".text-image-btn-text").innerHTML = "image")
      );
      allFullWrappers.forEach(function (el) {
        el.querySelector(".dimmer").classList.remove("on");
        el.querySelectorAll(".img").forEach((el2) =>
          el2.classList.remove("active")
        );
      });
      gridDatasheets.style.display = "grid";
      gridDatasheets.classList.add("active");
      fromExplodeAssemble = false;
      break;
    case "instructions":
      pauseFlag = false;
      pauseWrapper.classList.remove("active");
      allClickDivs.forEach(function (el) {
        el.style.pointerEvents = "none";
      });
      break;
  }
};
const SetSectionButtons = function (sectionName) {
  ctrlBtnWrapper
    .querySelectorAll(`.ctrl-btn.${sectionName}`)
    .forEach(function (el) {
      el.classList.remove("active");
      if (el.classList.contains(sectionName)) el.classList.add("active");
    });
  switch (sectionName) {
    case "features":
      break;
    case "components":
      if (explodeOrAssemble === "explode") {
        buttonComponentsAssemble.classList.remove("active");
      } else {
        buttonComponentsExplode.classList.remove("active");
      }
      break;
    case "datasheets":
      ctrlBtnWrapper.classList.remove("active");
      break;
    case "instructions":
      allButtonsInstructions.forEach(function (el) {
        el.classList.remove("current");
      });
      break;
  }
};
const ActivateCtrlButtonWrapper = function (sectionName) {
  if (sectionName === "datasheets") return;
  ctrlBtnWrapper.classList.add("active");
};
const FlashStartBlackout = function () {
  blackout.classList.remove("off");
  setTimeout(function () {
    blackout.classList.add("off");
  }, FLASH_START_BLACKOUT);
};
const FlashBlackout = function (value) {
  blackout.classList.remove("off");
  setTimeout(function () {
    blackout.classList.add("off");
  }, value);
};
const DeactivateAllActivateOne = function (deactivate, className, activate) {
  let activatedValue;
  deactivate.forEach(function (el, index) {
    el.classList.remove(className);
    if (el.classList.contains(activate)) {
      el.classList.add(className);
      activatedValue = el;
      activeFullWrapperIndex = index;
    }
  });
  return activatedValue;
};
const PlaySectionVids = function (endVidFlag) {
  const allFullWrappers = activeSection.querySelectorAll(".full-wrapper");
  if (!endVidFlag) {
    allFullWrappers[activeFullWrapperIndex]
      .querySelector(`.vid.${activeSectionName}`)
      .play();
    allFullWrappers[activeFullWrapperIndex]
      .querySelector(`.vid.${activeSectionName}-mobile-p`)
      .play();
  } else {
    allFullWrappers[activeFullWrapperIndex]
      .querySelector(`.vid.${activeSectionName}-end`)
      .play();
    allFullWrappers[activeFullWrapperIndex]
      .querySelector(`.vid.${activeSectionName}-end-mobile-p`)
      .play();
  }
};
const RewindAndPauseAllSectionVids = function (sectionName) {
  activeSection.querySelectorAll(`.vid.${sectionName}`).forEach(function (el) {
    el.currentTime = 0;
    el.pause();
  });
  activeSection
    .querySelectorAll(`.vid.${sectionName}-mobile-p`)
    .forEach(function (el) {
      el.currentTime = 0;
      el.pause();
    });
  activeSection
    .querySelectorAll(`.vid.${sectionName}-end`)
    .forEach(function (el) {
      el.currentTime = 0;
      el.pause();
    });
  activeSection
    .querySelectorAll(`.vid.${sectionName}-end-mobile-p`)
    .forEach(function (el) {
      el.currentTime = 0;
      el.pause();
    });
};
const EnableDisableNavLinks = function (enable) {
  if (enable) {
    allNavLinks.forEach(function (el) {
      el.style.pointerEvents = "auto";
    });
  } else {
    allNavLinks.forEach(function (el) {
      el.style.pointerEvents = "none";
    });
  }
};
//....................................................................
//GLOBAL OPERATIONS
navBar.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav_menu_link");
  if (!clicked) return;
  const clickedSectionName = clicked.classList[1];
  ActivateSection(clickedSectionName);
});
const ActivateSection = function (sectionName) {
  allNavLinks.forEach(function (el) {
    el.classList.remove("current");
    if (el.classList.contains(sectionName)) el.classList.add("current");
  });
  activeSection = document.querySelector(`.section_${sectionName}`);
  activeSectionName = activeSection.classList[0].slice(8);
  DeactivateAllSections();
  DeactivateAllFullWrappers();
  DeactivateAllButtons();
  ResetAllVideos();
  SetSectionFullWrapper(activeSection, sectionName);
  SetSectionText(activeSection, sectionName);
  SetSectionSpecialElements(sectionName);
  SetSectionButtons(sectionName);
  ActivateCtrlButtonWrapper(sectionName);
  if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
  document.querySelector(`.section_${sectionName}`).classList.add("active");
};
//....................................................................
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//CONSTRUCTION ZONE

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//....................................................................
//FEATURES SECTION
allVidsFeatures.forEach(function (el) {
  el.addEventListener("ended", function () {
    el.parentElement.parentElement.parentElement
      .querySelector(".text-wrapper")
      .classList.add("active");
    RevealEndVidWrappers(vidName);
    EnableDisableNavLinks(true);
    PlaySectionVids(true);
  });
});
ctrlBtnWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".ctrl-btn.features");
  if (!clicked) return;
  FlashBlackout(FLASH_BLACKOUT);
  vidName = clicked.classList[2];
  clearTimeout(newTimer);
  newTimer = setTimeout(() => {
    SetActiveVid("main");
  }, FEATURE_MAIN_VID_REPLAY);
  RewindAndPauseAllSectionVids("features");
  SetActiveVid(vidName);
  EnableDisableNavLinks(false);
  PlaySectionVids(false);
});
const SetActiveVid = function (vidName) {
  allVidWrappersFeatures.forEach(function (el) {
    el.classList.add("active");
  });
  activeFullWrapperFeatures = DeactivateAllActivateOne(
    allFullWrappersFeatures,
    "active",
    vidName
  );
  allTextWrappersFeatures.forEach(function (el) {
    el.classList.remove("active");
  });
  if (vidName === "main") {
    activeFullWrapperFeatures
      .querySelector(".text-wrapper")
      .classList.add("active");
    return;
  }
};
const RevealEndVidWrappers = function () {
  activeFullWrapperFeatures
    .querySelectorAll(".video-wrapper")
    .forEach(function (el) {
      el.classList.remove("active");
    });
};
//....................................................................
//COMPONENTS SECTION
allDotsComponents.forEach(function (el) {
  el.addEventListener("click", function () {
    compContentActive = true;
    FadeInTextWrapperContent();
    activeFullWrapperComponents.querySelector(".heading-generic").innerHTML =
      el.querySelector(".map_dot-name").innerHTML;
    activeFullWrapperComponents.querySelector(".text-generic").innerHTML =
      el.querySelector(".map_dot-description").innerHTML;
    activeFullWrapperComponents
      .querySelector(".button-datalink")
      .classList.add("active");
  });
  el.addEventListener("mouseover", function () {
    clearTimeout(datasheetButtonTimer);
  });
  el.addEventListener("mouseout", function () {
    TriggerDatasheetButtonTimer();
  });
});
allTextWrappersComponents.forEach(function (el) {
  el.addEventListener("mouseover", function () {
    clearTimeout(datasheetButtonTimer);
  });
  el.addEventListener("mouseout", function () {
    TriggerDatasheetButtonTimer();
  });
});
allVidsComponents.forEach(function (el) {
  el.addEventListener("ended", function () {
    const pastActiveFullWrapperComponents = activeFullWrapperComponents;
    if (activeFullWrapperComponents.classList.contains("explode")) {
      componentsType = "assemble";
    } else {
      componentsType = "explode";
    }
    activeFullWrapperComponents = DeactivateAllActivateOne(
      allFullWrappersComponents,
      "active",
      componentsType
    );
    ToggleComponentsImage(pastActiveFullWrapperComponents, true);
    allButtonsComponents.forEach(function (el) {
      el.classList.remove("active");
      if (el.classList.contains(componentsType)) {
        el.classList.add("active");
      }
    });
    ToggleComponentsImage(activeFullWrapperComponents, true);
    compContentActive = true;
    FadeInTextWrapperContent();
    compContentActive = false;
    EnableDisableNavLinks(true);
  });
});
allButtonsDatalinks.forEach(function (el) {
  el.addEventListener("click", function () {
    explodeOrAssemble = el.parentElement.parentElement.classList[1];
    const compNumber =
      el.parentElement.querySelector(".heading-generic").innerHTML;
    if (compNumber.length > 11) {
      compNumberString = `comp-${compNumber.slice(-2)}`;
    } else {
      compNumberString = `comp-${compNumber[compNumber.length - 1]}`;
    }
    OpenDatasheet(compNumberString);
  });
});
ctrlBtnWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".ctrl-btn.components");
  if (!clicked) return;
  allVidsComponents.forEach(function (el) {
    el.currentTime = 0;
  });
  allVidsComponentsMobileP.forEach(function (el) {
    el.currentTime = 0;
  });
  componentsType = clicked.classList[2];
  componentsType === "explode"
    ? (explodeOrAssemble = "assemble")
    : (explodeOrAssemble = "explode");
  activeFullWrapperComponents
    .querySelector(".text-wrapper")
    .classList.remove("active");
  ToggleComponentsImage(activeFullWrapperComponents, false);
  ResetTextWrapperContent(false);
  EnableDisableNavLinks(false);
  PlaySectionVids(false);
});
const TriggerDatasheetButtonTimer = function () {
  datasheetButtonTimer = setTimeout(function () {
    ResetTextWrapperContent(true);
    compContentActive = false;
  }, DATASHEET_BUTTON_TIMER);
};
const FadeInTextWrapperContent = function () {
  if (!compContentActive) return;
  activeFullWrapperComponents
    .querySelector(".text-wrapper")
    .classList.remove("active");
  setTimeout(function () {
    activeFullWrapperComponents
      .querySelector(".text-wrapper")
      .classList.add("active");
  }, FADE_IN_COMPONENTS_HEADING);
};
const ResetTextWrapperContent = function (fadeInTopWrapperBool) {
  if (fadeInTopWrapperBool) FadeInTextWrapperContent();
  activeFullWrapperComponents.querySelector(".heading-generic").innerHTML =
    componentHeaderMain;
  activeFullWrapperComponents.querySelector(".text-generic").innerHTML =
    componentTextMain;
  activeFullWrapperComponents
    .querySelector(".button-datalink")
    .classList.remove("active");
};
const ToggleComponentsImage = function (activeImage, state) {
  const allActiveDotsImages = activeImage.querySelectorAll(".dots-wrapper");
  allActiveDotsImages.forEach(function (el) {
    state ? el.classList.add("active") : el.classList.remove("active");
  });
};
const OpenDatasheet = function (value) {
  compContentActive = false;
  gridDatasheets.classList.remove("active");
  sectionDatasheets.classList.add("active");
  sectionComponents.classList.remove("active");
  navLinkComponents.classList.remove("current");
  navLinkDatasheets.classList.add("current");
  ResetTextWrapperContent(false);
  fromExplodeAssemble = true;
  activeSection = sectionDatasheets;
  activeSectionName = "datasheets";
  document.querySelector(`.datasheet-card-wrapper.${value}`).click();
  EnableDisableNavLinks(false);
};
//....................................................................
// DATASHEETS SECTION
gridDatasheets.addEventListener("click", function (e) {
  const clicked = e.target.closest(".datasheet-card-wrapper");
  if (!clicked) return;
  gridDatasheets
    .querySelectorAll(".datasheet-card-wrapper")
    .forEach(function (el, index) {
      if (el.classList[1] === clicked.classList[1]) {
        datasheetIndex = index;
      }
    });
  ActivateFullWrapperDatasheets(datasheetIndex);
});
allVidsDatasheets.forEach(function (el) {
  el.addEventListener("ended", function () {
    SetAllDatasheets(true);
    ActivateButtonsDatasheets();
    ctrlBtnWrapper.classList.add("active");
    if (navLinkDatasheets.style.pointerEvents === "none")
      EnableDisableNavLinks(true);
  });
});
allButtonsTextImage.forEach(function (el) {
  el.addEventListener("click", function () {
    el.querySelector(".text-image-btn-text").innerHTML = imageTextFlag;
    imageTextFlag === "text"
      ? (imageTextFlag = "image")
      : (imageTextFlag = "text");
    el.parentElement.parentElement
      .querySelectorAll(".datasheet-subheading")
      .forEach((el2) => el2.classList.toggle("active"));
    el.parentElement.parentElement
      .querySelectorAll(".datasheet-text")
      .forEach((el3) => el3.classList.toggle("active"));
    imageTextFlag === "image"
      ? el.parentElement.parentElement.parentElement
          .querySelector(".dimmer")
          .classList.remove("on")
      : el.parentElement.parentElement.parentElement
          .querySelector(".dimmer")
          .classList.add("on");
  });
});
ctrlBtnWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".ctrl-btn.datasheets");
  if (!clicked) return;
  if (clicked.classList.contains("back")) {
    ActivateSection("components");
  } else {
    buttonDatasheetsBack.classList.remove("active");
    imageTextFlag = "text";
    allButtonsTextImage.forEach(
      (el) => (el.querySelector(".text-image-btn-text").innerHTML = "image")
    );
    allDatasheetSubHeadings.forEach((el) => el.classList.add("active"));
    allDatasheetText.forEach((el) => el.classList.add("active"));
    allFullWrappersDatasheets.forEach(function (el) {
      el.classList.remove("active");
      el.querySelector(".text-wrapper").classList.remove("active");
      el.querySelector(".dimmer").classList.remove("on");
      el.querySelectorAll(".img").forEach((el2) =>
        el2.classList.remove("active")
      );
    });
    allVidsDatasheets.forEach(function (el) {
      el.currentTime = 0;
    });
    allVidsDatasheetsMobileP.forEach(function (el) {
      el.currentTime = 0;
    });
    gridDatasheets.style.display = "grid";
    setTimeout(function () {
      gridDatasheets.classList.add("active");
    }, FADE_IN_DATASHEETS_GRID);
    fromExplodeAssemble = false;
    ctrlBtnWrapper.classList.remove("active");
  }
});
const ActivateButtonsDatasheets = function () {
  allButtonsComponents.forEach(function (el) {
    el.classList.remove("active");
  });
  allButtonsDatasheets.forEach(function (el) {
    el.classList.add("active");
  });
  if (!fromExplodeAssemble) buttonDatasheetsBack.classList.remove("active");
};
const SetAllDatasheets = function (turnOn) {
  allFullWrappersDatasheets.forEach(function (el) {
    el.querySelector(".dimmer").classList.toggle("on", turnOn);
    el.querySelectorAll(".img").forEach(function (el2) {
      el2.classList.toggle("active", turnOn);
    });
    el.querySelector(".text-wrapper").classList.toggle("active", turnOn);
  });
};
const ActivateFullWrapperDatasheets = function (dataSheetIndex) {
  ctrlBtnWrapper.classList.remove("active");
  gridDatasheets.classList.remove("active");
  gridDatasheets.style.display = "none";
  if (!fromExplodeAssemble) FlashBlackout(FLASH_BLACKOUT);
  allFullWrappersDatasheets.forEach(function (el) {
    el.classList.remove("active");
  });
  activeFullWrapperDatasheets = allFullWrappersDatasheets[dataSheetIndex];
  activeFullWrapperDatasheets.classList.add("active");
  activeFullWrapperIndex = dataSheetIndex;
  EnableDisableNavLinks(false);
  setTimeout(function () {
    PlaySectionVids(false);
  }, PLAY_DATASHEET_VID_AFTER_DELAY);
};
//....................................................................
//INSTRUCTIONS SECTION
allClickDivs.forEach(function (el) {
  el.addEventListener("click", function () {
    if (pauseFlag) {
      PlaySectionVids(false);
      pauseWrapper.classList.remove("active");
      pauseFlag = false;
    } else {
      clearTimeout(instructionVidTimer);
      instructionVidTimer = null;
      activeFullWrapperInstructions.querySelector(".vid.instructions").pause();
      activeFullWrapperInstructions
        .querySelector(".vid.instructions-mobile-p")
        .pause();
      pauseWrapper.classList.add("active");
      pauseFlag = true;
    }
  });
});
allVidsInstructions.forEach(function (el) {
  el.addEventListener("ended", function () {
    if (pauseFlag) {
      el.pause();
      el.parentElement.parentElement.parentElement
        .querySelector(".vid.instructions-mobile-p")
        .pause();
    } else {
      instructionVidTimer = setTimeout(function () {
        currentVid += 1;
        if (currentVid > 4 && instructionVidLooping) {
          currentVid = 1;
        } else if (currentVid > 4 && !instructionVidLooping) {
          ResetToInstructionsMainScreen();
          return;
        }
        ActivateFullWrapperInstructions(`step-${currentVid}`);
        PlaySectionVids(false);
      }, PAUSE_BETWEEN_INSTRUCTION_VIDS);
    }
  });
});
allButtonsInstructions.forEach(function (el) {
  el.addEventListener("mouseenter", function () {
    el.classList.add("hovered");
  });
  el.addEventListener("mouseleave", function () {
    el.classList.remove("hovered");
  });
});
ctrlBtnWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".ctrl-btn.instructions");
  if (!clicked) return;
  FlashBlackout(FLASH_BLACKOUT);
  clearTimeout(instructionVidTimer);
  instructionVidTimer = null;
  textWrapperInstructions.classList.remove("active");
  pauseFlag = false;
  pauseWrapper.classList.remove("active");
  allClickDivs.forEach(function (el) {
    el.style.pointerEvents = "auto";
  });
  allFullWrappersInstructions.forEach(function (el) {
    el.classList.remove("active");
  });
  currentVid = Array.from(allButtonsInstructions).indexOf(clicked) + 1;
  ActivateFullWrapperInstructions(`step-${currentVid}`);
  RewindAndPauseAllSectionVids("instructions");
  PlaySectionVids(false);
});
const ActivateFullWrapperInstructions = function (value) {
  activeFullWrapperInstructions = DeactivateAllActivateOne(
    allFullWrappersInstructions,
    "active",
    value
  );
  allButtonsInstructions.forEach(function (el) {
    el.classList.remove("current", "hovered");
    if (el.classList.contains(value)) el.classList.add("current");
  });
};
const ResetToInstructionsMainScreen = function () {
  FlashBlackout(FLASH_BLACKOUT);
  pauseFlag = false;
  pauseWrapper.classList.remove("active");
  textWrapperInstructions.classList.add("active");
  allButtonsInstructions.forEach(function (el) {
    el.classList.remove("current");
  });
  allClickDivs.forEach(function (el) {
    el.style.pointerEvents = "none";
  });
  allFullWrappersInstructions.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains("step-1")) {
      el.querySelector(".vid.instructions").currentTime = 0;
      el.querySelector(".vid.instructions").pause();
      el.querySelector(".vid.instructions-mobile-p").currentTime = 0;
      el.querySelector(".vid.instructions-mobile-p").pause();
      el.classList.add("active");
    }
  });
};
//....................................................................
// NAVIGATION
// const miniNav = document.querySelector(".mini-nav-wrapper");
// const miniNavTouch = document.querySelector(".mini-nav-wrapper.touch");
// const miniNavLink = document.querySelector(".mini-nav-link");
// const miniNavLinkTouch = document.querySelector(".mini-nav-link-touch");
// const buttonWrapper = document.querySelector(".ctrl-btn-wrapper");
// const activeNav = document.querySelector(".active-nav");
// const activeNavTouch = document.querySelector(".active-nav.touch");
// let usingTouch = false;

// miniNavTouch.addEventListener("click", function () {
//   miniNavTouch.style.height = "auto";
//   activeNavTouch.style.display = "none";
//   allNavLinksTouch.forEach(function (el) {
//     el.classList.remove("active");
//     if (el.classList.contains(activeSection)) {
//       el.classList.add("active");
//     }
//     el.style["pointer-events"] = "none";
//     setTimeout(() => (el.style["pointer-events"] = "auto"), 100);
//     el.style.display = "block";
//   });
// });

// miniNav.addEventListener("mouseenter", function () {
//   miniNav.style.height = "auto";
//   activeNav.style.display = "none";
//   allNavLinks.forEach(function (el) {
//     el.style["pointer-events"] = "none";
//     setTimeout(() => (el.style["pointer-events"] = "auto"), 100);
//     el.style.display = "block";
//   });
// });
// miniNav.addEventListener("mouseleave", function () {
//   miniNav.style.height = "2.6rem";
//   activeNav.style.display = "block";
//   miniNavLink.style.display = "none";
// });

// miniNav.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".mini-nav-link");
//   if (!clicked) return;
//   activeSection = clicked.classList[1];
//   setActiveSectionLinkBtns(activeSection);
// });
// miniNavTouch.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".mini-nav-link-touch");
//   if (!clicked) return;
//   activeSection = clicked.classList[1];
//   setActiveSectionLinkBtns(activeSection);
// });
// buttonWrapper.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".ctrl-btn");
//   if (!clicked) return;
//   console.log(clicked);
// });

// const setActiveSectionLinkBtns = function (section) {
//   activeNav.innerHTML = section;
//   activeNavTouch.innerHTML = section;
//   allNavLinks.forEach(function (el) {
//     el.classList.remove("active");
//     if (el.classList.contains(section)) {
//       el.classList.add("active");
//     }
//     miniNav.style.height = "2.6rem";
//     activeNav.style.display = "block";
//   });
//   allNavLinksTouch.forEach(function (el) {
//     el.style.display = "none";
//     el.classList.remove("active");
//     if (el.classList.contains(section)) {
//       el.classList.add("active");
//     }
//   });
//   miniNavTouch.style.height = "2.6rem";
//   activeNavTouch.style.display = "block";

//   allSections.forEach(function (el) {
//     el.classList.remove("active");
//     if (el.classList.contains(section)) {
//       el.classList.add("active");
//     }
//   });
//   allCtrlBtns.forEach(function (el) {
//     el.classList.remove("active");
//     if (el.classList.contains(section)) {
//       el.classList.add("active");
//     }
//   });
// };
//....................................................................
// sectionFeatures.addEventListener("wheel", function (e) {
//   if (e.deltaY > 0) {
//     setActiveSectionLinkBtns("explode");
//   }
// });
// sectionFeatures.addEventListener("touchstart", function (e) {
//   startY = e.changedTouches[0].screenY;
// });
// sectionFeatures.addEventListener("touchend", function (e) {
//   endY = e.changedTouches[0].screenY;
//   if (endY < startY) {
//     activeSection = "explode";
//     setActiveSectionLinkBtns(activeSection);
//   } else if (endY > startY) {
//     activeSection = "features";
//     setActiveSectionLinkBtns(activeSection);
//   }
// });
// sectionExplode.addEventListener("wheel", function (e) {
//   if (e.deltaY < 0) {
//     activeSection = "features";
//     setActiveSectionLinkBtns(activeSection);
//   }
// });
// sectionExplode.addEventListener("touchstart", function (e) {
//   startY = e.changedTouches[0].screenY;
// });
// sectionExplode.addEventListener("touchend", function (e) {
//   endY = e.changedTouches[0].screenY;
//   if (endY > startY) {
//     activeSection = "features";
//     setActiveSectionLinkBtns(activeSection);
//   } else if (endY < startY) {
//     activeSection = "explode";
//     setActiveSectionLinkBtns(activeSection);
//   }
// });
//....................................................................
