console.log("main");
//....................................................................
//UNIVERSAL DEFINITIONS
let blackoutFlag = true;
const FEATURE_MAIN_VID_REPLAY = 5000;
const DATASHEET_BUTTON_TIMER = 1500;
const FADE_IN_COMPONENTS_HEADING = 25;
const FADE_IN_DATASHEETS_GRID = 25;
const FLASH_BLACKOUT = 50;
const FLASH_START_BLACKOUT = 200;
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
const allFeaturesButtons = document.querySelectorAll(".features-btn");
const allComponentsButtons = document.querySelectorAll(".components-btn");
const allDatasheetsBtns = document.querySelectorAll(".datasheets-btn");
const allInstructionsButtons = document.querySelectorAll(".instructions-btn");
const allCtrlButtons = [
  ...allFeaturesButtons,
  ...allComponentsButtons,
  ...allDatasheetsBtns,
  ...allInstructionsButtons,
];
//....................................................................
//FEATURES DEFINITIONS
const allFeatureAllWrappers = sectionFeatures.querySelectorAll(".all-wrapper");
const allFeatureTextWrappers =
  sectionFeatures.querySelectorAll(".text-wrapper");
const allFeatureVidWrappers =
  sectionFeatures.querySelectorAll(".video-wrapper");
const allFeatureVids = document.querySelectorAll(".vid.feature");
const allFeatureVidsMobileP = document.querySelectorAll(
  ".vid.feature-mobile-p"
);
const allFeatureEndVids = document.querySelectorAll(".vid.end");
const allFeatureEndVidsMobileP = document.querySelectorAll(".vid.end-mobile-p");
const allSectionVidsFeatures = [
  ...allFeatureVids,
  ...allFeatureVidsMobileP,
  ...allFeatureEndVids,
  ...allFeatureEndVidsMobileP,
];
let activeVidAllWrapper;
let vidFlag;
let newTimer;
//....................................................................
//COMPONENTS DEFINITIONS
const allDatasheetButtons = document.querySelectorAll(".button-datasheet");
const mainComponentHeader = "Explode/Assemble";
const mainComponentText =
  "Hover/click the dots for details about particular components. Use buttons below for exploded/assembled views.";
const allComponentTextWrappers =
  sectionComponents.querySelectorAll(".text-wrapper");
const allDots = document.querySelectorAll(".map_dot");
const allComponentAllWrappers =
  sectionComponents.querySelectorAll(".all-wrapper");
const componentVidExplode = document.querySelector(".vid.explode");
const componentVidExplodeMobileP = document.querySelector(
  ".vid.explode-mobile-p"
);
const componentVidAssemble = document.querySelector(".vid.assemble");
const componentVidAssembleMobileP = document.querySelector(
  ".vid.assemble-mobile-p"
);
const allComponentVids = [componentVidExplode, componentVidAssemble];
const allComponentVidsMobileP = [
  componentVidExplodeMobileP,
  componentVidAssembleMobileP,
];
const allSectionVidsComponents = [
  ...allComponentVids,
  ...allComponentVidsMobileP,
];
const componentsExplodeButton = document.querySelector(
  ".components-btn.explode"
);
const componentAssembleButton = document.querySelector(
  ".components-btn.assemble"
);
const allWrapperExplode = sectionComponents.querySelector(
  ".all-wrapper.explode"
);
let activeComponentsWrap = allWrapperExplode;
let dotsFlag;
let datasheetButtonTimer;
let explodeOrAssemble;
let compNumberString;
let compContentActive = false;
//....................................................................
//DATASHEETS DEFINITIONS;
const blackout = document.querySelector(".blackout");
const datasheetsBackButton = document.querySelector(".datasheets-btn.back");
const datasheetsAllWrapper = document.querySelector(".datasheets-grid");
const allDatasheetWrappers = document.querySelectorAll(
  ".datasheet-all-wrapper"
);
const allDatasheetVids = document.querySelectorAll(".vid.datazoom");
const allDatasheetVidsMobileP = document.querySelectorAll(
  ".vid.datazoom-mobile-p"
);
const allSectionVidsDatasheets = [
  ...allDatasheetVids,
  ...allDatasheetVidsMobileP,
];
const allTextImageButtons = document.querySelectorAll(".text-image-btn");
const allDatasheetSubHeadings = document.querySelectorAll(
  ".datasheet-subheading"
);
const allDatasheetText = document.querySelectorAll(".datasheet-text");

let activeDatasheetComp;
let imageTextFlag = "text";
let fromExplodeAssemble = false;
//....................................................................
//INSTRUCTIONS DEFINITIONS;
const allInstructionAllWrappers =
  sectionInstructions.querySelectorAll(".all-wrapper");
const instructionsTextWrapper =
  sectionInstructions.querySelector(".text-wrapper");
const allInstructionVids = document.querySelectorAll(".vid.instruction");
const allInstructionVidsMobileP = document.querySelectorAll(
  ".vid.instruction-mobile-p"
);
const allSectionVidsInstructions = [
  ...allInstructionVids,
  ...allInstructionVidsMobileP,
];
const allClickDivs = document.querySelectorAll(".click-div");
const pauseWrapper = document.querySelector(".pause-wrapper");
let ActiveInstructionAllWrapper;
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
//UNIVERSAL FUNCTIONS
const ResetAndPauseAllVideos = function () {
  allVideos.forEach(function (el) {
    el.currentTime = 0;
    el.pause();
  });
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
//....................................................................
//UNIVERSAL OPERATIONS
navBar.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav_menu_link");
  if (!clicked) return;
  const activeSectionFlag = clicked.classList[1];
  ActivateSection(activeSectionFlag);
});
const ActivateSection = function (value) {
  allNavLinks.forEach(function (el) {
    el.classList.remove("current");
    if (el.classList.contains(value)) el.classList.add("current");
  });
  allSections.forEach(function (el) {
    el.classList.remove("active");
  });
  allCtrlButtons.forEach(function (el) {
    el.classList.remove("active");
  });
  switch (value) {
    case "features":
      ResetAndPauseAllVideos();
      allFeatureAllWrappers.forEach(function (el) {
        el.classList.remove("active");
        if (el.classList.contains("main")) {
          el.classList.add("active");
          activeVidAllWrapper = el;
        }
      });
      allFeatureTextWrappers.forEach(function (el) {
        el.classList.remove("active");
      });
      activeVidAllWrapper
        .querySelector(".text-wrapper")
        .classList.add("active");
      allFeatureVids.forEach(function (el) {
        el.classList.remove("active");
        if (el.classList.contains("main")) el.classList.add("active");
      });
      allFeaturesButtons.forEach(function (el) {
        el.classList.add("active");
      });
      ctrlBtnWrapper.classList.add("active");
      sectionFeatures.classList.add("active");
      if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
      break;
    case "components":
      ResetAndPauseAllVideos();
      allComponentAllWrappers.forEach(function (el) {
        el.classList.remove("active");
      });
      allWrapperExplode.classList.add("active");
      activeComponentsWrap = allWrapperExplode;
      activeComponentsWrap
        .querySelector(".dots-wrapper")
        .classList.add("active");
      dotsFlag = "";
      allWrapperExplode.querySelector(".text-wrapper").classList.add("active");
      componentAssembleButton.classList.remove("active");
      componentsExplodeButton.classList.add("active");
      ctrlBtnWrapper.classList.add("active");
      sectionComponents.classList.add("active");
      if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
      break;
    case "datasheets":
      ResetAndPauseAllVideos();
      datasheetsBackButton.classList.remove("active");
      imageTextFlag = "text";
      allTextImageButtons.forEach(
        (el) => (el.querySelector(".text-image-btn-text").innerHTML = "image")
      );
      allDatasheetSubHeadings.forEach((el) => el.classList.add("active"));
      allDatasheetText.forEach((el) => el.classList.add("active"));
      allDatasheetWrappers.forEach(function (el) {
        el.classList.remove("active");
        el.querySelector(".text-wrapper").classList.remove("active");
        el.querySelector(".dimmer").classList.add("off");
        el.querySelectorAll(".img").forEach((el2) =>
          el2.classList.remove("active")
        );
      });
      datasheetsAllWrapper.style.display = "grid";
      setTimeout(function () {
        datasheetsAllWrapper.classList.add("active");
      }, FADE_IN_DATASHEETS_GRID);
      fromExplodeAssemble = false;
      ctrlBtnWrapper.classList.remove("active");
      sectionDatasheets.classList.add("active");
      if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
      break;
    case "instructions":
      ResetToMainScreen();
      allInstructionsButtons.forEach(function (el) {
        el.classList.add("active");
      });
      ctrlBtnWrapper.classList.add("active");
      ResetAndPauseAllVideos();
      sectionInstructions.classList.add("active");
      if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
      break;
  }
};
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
//CONSTRUCTION ZONE
const DeactivateAllActivateOne = function (deactivate, className, activate) {
  let activatedValue;
  deactivate.forEach(function (el) {
    el.classList.remove(className);
    if (el.classList.contains(activate)) {
      el.classList.add(className);
      activatedValue = el;
    }
  });
  return activatedValue;
};
const PlaySectionVids = function (sectionVids) {
  sectionVids.forEach(function (el) {
    el.play();
  });
};
// let activated = DeactivateAllActivateOne(allFeatureButtons, "active", "second");
// activated.style.backgroundColor = "grey";

//....................................................................
//FEATURES SECTION
ctrlBtnWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".features-btn");
  if (!clicked) return;
  vidFlag = clicked.classList[1];
  clearTimeout(newTimer);
  newTimer = setTimeout(() => {
    SetActiveVidAndPlay("main");
  }, FEATURE_MAIN_VID_REPLAY);
  SetActiveVidAndPlay(vidFlag);
});
allFeatureVids.forEach(function (el) {
  el.addEventListener("ended", function () {
    el.parentElement.parentElement.parentElement
      .querySelector(".text-wrapper")
      .classList.add("active");
    SetActiveEndVidAndPlay(vidFlag);
  });
});
const SetActiveVidAndPlay = function (vidFlag) {
  RewindAndPauseAllFeatureVids();
  allFeatureVidWrappers.forEach(function (el) {
    el.classList.add("active");
  });
  activeVidAllWrapper = DeactivateAllActivateOne(
    allFeatureAllWrappers,
    "active",
    vidFlag
  );

  allFeatureTextWrappers.forEach(function (el) {
    el.classList.remove("active");
  });
  if (vidFlag === "main") {
    activeVidAllWrapper.querySelector(".text-wrapper").classList.add("active");
    return;
  }
  // PlaySectionVids();
  activeVidAllWrapper.querySelector(".vid.feature").play();
  activeVidAllWrapper.querySelector(".vid.feature-mobile-p").play();
};
const RewindAndPauseAllFeatureVids = function () {
  allSectionVidsFeatures.forEach(function (el) {
    el.currentTime = 0;
    el.pause();
  });
};
const SetActiveEndVidAndPlay = function () {
  activeVidAllWrapper.querySelectorAll(".video-wrapper").forEach(function (el) {
    el.classList.remove("active");
  });
  activeVidAllWrapper.querySelector(".vid.end").play();
  activeVidAllWrapper.querySelector(".vid.end-mobile-p").play();
};
//....................................................................
//COMPONENTS SECTION
allDots.forEach(function (el) {
  el.addEventListener("click", function () {
    compContentActive = true;
    FadeInTopWrapperContent();
    activeComponentsWrap.querySelector(".heading-style-h2").innerHTML =
      el.querySelector(".map_dot-name").innerHTML;
    activeComponentsWrap.querySelector(".text-size-regular").innerHTML =
      el.querySelector(".map_dot-description").innerHTML;
    activeComponentsWrap
      .querySelector(".button-datasheet")
      .classList.add("active");
  });
  el.addEventListener("mouseover", function () {
    clearTimeout(datasheetButtonTimer);
  });
  el.addEventListener("mouseout", function () {
    datasheetButtonTimer = setTimeout(function () {
      ResetTopWrapperContent(true);
      compContentActive = false;
    }, DATASHEET_BUTTON_TIMER);
  });
});
allComponentTextWrappers.forEach(function (el) {
  el.addEventListener("mouseover", function () {
    clearTimeout(datasheetButtonTimer);
  });
  el.addEventListener("mouseout", function () {
    datasheetButtonTimer = setTimeout(function () {
      ResetTopWrapperContent(true);
      compContentActive = false;
    }, DATASHEET_BUTTON_TIMER);
  });
});
allComponentVids.forEach(function (el) {
  el.addEventListener("ended", function () {
    const pastActiveComponentsWrap = activeComponentsWrap;
    if (activeComponentsWrap.classList.contains("explode")) {
      SetActiveDotsWrapper("assemble");
    } else {
      SetActiveDotsWrapper("explode");
    }
    ToggleDotsImage(pastActiveComponentsWrap, true);
    allComponentsButtons.forEach(function (el) {
      el.classList.remove("active");
      if (el.classList.contains(dotsFlag)) {
        el.classList.add("active");
      }
    });
    ToggleDotsImage(activeComponentsWrap, true);
    compContentActive = true;
    FadeInTopWrapperContent();
    compContentActive = false;
  });
});
allDatasheetButtons.forEach(function (el) {
  el.addEventListener("click", function () {
    explodeOrAssemble = el.parentElement.parentElement.classList[1];
    const compNumber =
      el.parentElement.querySelector(".heading-style-h2").innerHTML;
    if (compNumber.length > 11) {
      compNumberString = `comp-${compNumber.slice(-2)}`;
    } else {
      compNumberString = `comp-${compNumber[compNumber.length - 1]}`;
    }
    OpenDataSheet(compNumberString, explodeOrAssemble);
  });
});
ctrlBtnWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".components-btn");
  if (!clicked) return;
  allComponentVids.forEach(function (el) {
    el.currentTime = 0;
  });
  allComponentVidsMobileP.forEach(function (el) {
    el.currentTime = 0;
  });
  dotsFlag = clicked.classList[1];
  activeComponentsWrap
    .querySelector(".text-wrapper")
    .classList.remove("active");
  ToggleDotsImage(activeComponentsWrap, false);
  ResetTopWrapperContent(false);
  PlayActiveDotsVideo();
});
const ActivateDotsButtons = function () {
  allDatasheetButtons.forEach(function (el) {
    el.classList.remove("active");
  });
  allComponentsButtons.forEach(function (el) {
    el.classList.add("active");
  });
  if (activeComponentsWrap.classList.contains("explode")) {
    componentAssembleButton.classList.remove("active");
  } else componentsExplodeButton.classList.remove("active");
  ctrlBtnWrapper.classList.add("active");
};
const FadeInTopWrapperContent = function () {
  if (!compContentActive) return;
  activeComponentsWrap
    .querySelector(".text-wrapper")
    .classList.remove("active");
  setTimeout(function () {
    activeComponentsWrap.querySelector(".text-wrapper").classList.add("active");
  }, FADE_IN_COMPONENTS_HEADING);
};
const ResetTopWrapperContent = function (fadeInTopWrapperBool) {
  if (fadeInTopWrapperBool) FadeInTopWrapperContent();
  activeComponentsWrap.querySelector(".heading-style-h2").innerHTML =
    mainComponentHeader;
  activeComponentsWrap.querySelector(".text-size-regular").innerHTML =
    mainComponentText;
  activeComponentsWrap
    .querySelector(".button-datasheet")
    .classList.remove("active");
};
const SetActiveDotsWrapper = function (value) {
  dotsFlag = value;
  allComponentAllWrappers.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains(dotsFlag)) {
      el.classList.add("active");
      activeComponentsWrap = el;
    }
  });
};
const ToggleDotsImage = function (activeImage, state) {
  const allActiveDotsImages = activeImage.querySelectorAll(".dots-wrapper");
  allActiveDotsImages.forEach(function (el) {
    state ? el.classList.add("active") : el.classList.remove("active");
  });
};
const PlayActiveDotsVideo = function () {
  const vidArray = [
    document.querySelector(`.vid.${dotsFlag}`),
    document.querySelector(`.vid.${dotsFlag}-mobile-p`),
  ];
  vidArray.forEach((el) => el.play());
};
const OpenDataSheet = function (value) {
  compContentActive = false;
  datasheetsAllWrapper.classList.remove("active");
  sectionDatasheets.classList.add("active");
  sectionComponents.classList.remove("active");
  navLinkComponents.classList.remove("current");
  navLinkDatasheets.classList.add("current");
  ResetTopWrapperContent(false);
  fromExplodeAssemble = true;
  document.querySelector(`.datasheet-card-wrapper.${value}`).click();
};
//....................................................................
// DATASHEETS SECTION
ctrlBtnWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".datasheets-btn");
  if (!clicked) return;
  if (clicked.classList.contains("back")) {
    ReturnToExplodeAssemble();
  } else {
    datasheetsBackButton.classList.remove("active");
    imageTextFlag = "text";
    allTextImageButtons.forEach(
      (el) => (el.querySelector(".text-image-btn-text").innerHTML = "image")
    );
    allDatasheetSubHeadings.forEach((el) => el.classList.add("active"));
    allDatasheetText.forEach((el) => el.classList.add("active"));
    allDatasheetWrappers.forEach(function (el) {
      el.classList.remove("active");
      el.querySelector(".text-wrapper").classList.remove("active");
      el.querySelector(".dimmer").classList.add("off");
      el.querySelectorAll(".img").forEach((el2) =>
        el2.classList.remove("active")
      );
    });
    allDatasheetVids.forEach(function (el) {
      el.currentTime = 0;
    });
    allDatasheetVidsMobileP.forEach(function (el) {
      el.currentTime = 0;
    });
    datasheetsAllWrapper.style.display = "grid";
    setTimeout(function () {
      datasheetsAllWrapper.classList.add("active");
    }, FADE_IN_DATASHEETS_GRID);
    fromExplodeAssemble = false;
    ctrlBtnWrapper.classList.remove("active");
  }
});
datasheetsAllWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".datasheet-card-wrapper");
  if (!clicked) return;
  allDatasheetVids.forEach(function (el) {
    el.currentTime = 0;
  });
  allDatasheetVidsMobileP.forEach(function (el) {
    el.currentTime = 0;
  });
  ActivateDataZoomWrapper(clicked.classList[1]);
});
allDatasheetVids.forEach(function (el) {
  el.addEventListener("ended", function () {
    activeDatasheetComp.querySelector(".dimmer").classList.remove("off");
    activeDatasheetComp
      .querySelectorAll(".img")
      .forEach((el2) => el2.classList.add("active"));
    activeDatasheetComp.querySelector(".text-wrapper").classList.add("active");
    ActivateDataZoomButons();
    ctrlBtnWrapper.classList.add("active");
  });
});
allTextImageButtons.forEach(function (el) {
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
          .classList.add("off")
      : el.parentElement.parentElement.parentElement
          .querySelector(".dimmer")
          .classList.remove("off");
  });
});
const ActivateDataZoomButons = function () {
  allComponentsButtons.forEach(function (el) {
    el.classList.remove("active");
  });
  allDatasheetButtons.forEach(function (el) {
    el.classList.add("active");
  });
  if (!fromExplodeAssemble) datasheetsBackButton.classList.remove("active");
};
const ReturnToExplodeAssemble = function () {
  navLinkDatasheets.classList.remove("current");
  navLinkComponents.classList.add("current");
  sectionDatasheets.classList.remove("active");
  document.querySelector(".datasheets-btn.datasheets").click();
  FlashBlackout(FLASH_BLACKOUT);
  document;
  sectionComponents
    .querySelector(`.all-wrapper.${explodeOrAssemble}`)
    .querySelector(".dots-wrapper")
    .classList.add("active");
  document;
  sectionComponents
    .querySelector(`.all-wrapper.${explodeOrAssemble}`)
    .classList.add("active");
  sectionComponents.classList.add("active");
  ActivateDotsButtons();
};
const ActivateDataZoomWrapper = function (value) {
  ctrlBtnWrapper.classList.remove("active");
  datasheetsAllWrapper.classList.remove("active");
  datasheetsAllWrapper.style.display = "none";
  if (!fromExplodeAssemble) FlashBlackout();
  allDatasheetWrappers.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains(value)) {
      el.classList.add("active");
      setTimeout(function () {
        el.querySelector(".vid.datazoom").play();
        el.querySelector(".vid.datazoom-mobile-p").play();
      }, PLAY_DATASHEET_VID_AFTER_DELAY);
    }
  });
  activeDatasheetComp = document.querySelector(
    `.datasheet-all-wrapper.${value}`
  );
};
//....................................................................
//INSTRUCTIONS SECTION
allClickDivs.forEach(function (el) {
  el.addEventListener("click", function () {
    if (pauseFlag) {
      ActiveInstructionAllWrapper.querySelector(".vid.instruction").play();
      ActiveInstructionAllWrapper.querySelector(
        ".vid.instruction-mobile-p"
      ).play();
      pauseWrapper.classList.remove("active");
      pauseFlag = false;
    } else {
      clearTimeout(instructionVidTimer);
      instructionVidTimer = null;
      ActiveInstructionAllWrapper.querySelector(".vid.instruction").pause();
      ActiveInstructionAllWrapper.querySelector(
        ".vid.instruction-mobile-p"
      ).pause();
      pauseWrapper.classList.add("active");
      pauseFlag = true;
    }
  });
});
allInstructionVids.forEach(function (el) {
  el.addEventListener("ended", function () {
    if (pauseFlag) {
      el.pause();
      el.parentElement.parentElement.parentElement
        .querySelector(".vid.instruction-mobile-p")
        .pause();
    } else {
      instructionVidTimer = setTimeout(function () {
        currentVid += 1;
        if (currentVid > 4 && instructionVidLooping) {
          currentVid = 1;
        } else if (currentVid > 4 && !instructionVidLooping) {
          FlashBlackout(FLASH_BLACKOUT);
          ResetToMainScreen();
          return;
        }
        ActivateAllWrapperAndPlayVids(`step-${currentVid}`);
      }, PAUSE_BETWEEN_INSTRUCTION_VIDS);
    }
  });
});
allInstructionsButtons.forEach(function (el) {
  el.addEventListener("mouseenter", function () {
    el.classList.add("hovered");
  });
  el.addEventListener("mouseleave", function () {
    el.classList.remove("hovered");
  });
});
ctrlBtnWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".instructions-btn");
  if (!clicked) return;
  clearTimeout(instructionVidTimer);
  instructionVidTimer = null;
  instructionsTextWrapper.classList.remove("active");
  pauseFlag = false;
  pauseWrapper.classList.remove("active");
  allInstructionAllWrappers.forEach(function (el) {
    el.classList.remove("active");
  });
  allInstructionVids.forEach(function (el) {
    el.currentTime = 0;
    el.pause();
  });
  currentVid = Array.from(allInstructionsButtons).indexOf(clicked) + 1;
  ActivateAllWrapperAndPlayVids(`step-${currentVid}`);
});
const ActivateAllWrapperAndPlayVids = function (value) {
  allInstructionAllWrappers.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains(value)) {
      el.classList.add("active");
      ActiveInstructionAllWrapper = el;
      ActiveInstructionAllWrapper.querySelectorAll(".vid.instruction").forEach(
        function (el2) {
          el2.play();
        }
      );
      ActiveInstructionAllWrapper.querySelectorAll(
        ".vid.instruction-mobile-p"
      ).forEach(function (el2) {
        el2.play();
      });
    }
  });
  allInstructionsButtons.forEach(function (el) {
    el.classList.remove("current", "hovered");
    if (el.classList.contains(value)) el.classList.add("current");
  });
};
const ResetToMainScreen = function () {
  pauseFlag = false;
  pauseWrapper.classList.remove("active");
  sectionInstructions.classList.add("active");
  instructionsTextWrapper.classList.add("active");
  allInstructionsButtons.forEach(function (el) {
    el.classList.remove("current");
  });
  allInstructionAllWrappers.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains("step-1")) el.classList.add("active");
    el.querySelector(".vid.instruction").currentTime = 0;
    el.querySelector(".vid.instruction-mobile-p").currentTime = 0;
    el.querySelector(".vid.instruction").pause();
    el.querySelector(".vid.instruction-mobile-p").pause();
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
