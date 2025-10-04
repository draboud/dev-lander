console.log("universal-ops: Oct 4, 2025");
//....................................................................
//CONSTRUCTION ZONE
// const selectAnIndex = function (selectedIndex) {
//   console.log(selectedIndex);
//   myArray.forEach(function (el, index) {
//     console.log(el);
//     if (el === selectedIndex) console.log(index);
//   });
//   // console.log(myArray[selectedIndex]);
// };
// const myArray = ["first", "second", "third"];
// selectAnIndex(myArray[1]);

//....................................................................
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
const allButtonsFeatures = document.querySelectorAll(".features-btn");
const allButtonsComponents = document.querySelectorAll(".components-btn");
const allButtonsDatasheets = document.querySelectorAll(".datasheets-btn");
const allButtonsInstructions = document.querySelectorAll(".instructions-btn");
const allCtrlButtons = [
  ...allButtonsFeatures,
  ...allButtonsComponents,
  ...allButtonsDatasheets,
  ...allButtonsInstructions,
];
//....................................................................
//FEATURES DEFINITIONS
const allFullWrappersFeatures =
  sectionFeatures.querySelectorAll(".full-wrapper");
const allTextWrappersFeatures =
  sectionFeatures.querySelectorAll(".text-wrapper");
const allVidWrappersFeatures =
  sectionFeatures.querySelectorAll(".video-wrapper");
const allVidsFeatures = document.querySelectorAll(".vid.feature");
const allVidsFeaturesMobileP = document.querySelectorAll(
  ".vid.feature-mobile-p"
);
const allEndVidsFeatures = document.querySelectorAll(".vid.feature-end");
const allEndVidsFeaturesMobileP = document.querySelectorAll(
  ".feature-end-mobile-p"
);
const allSectionVidsFeatures = [
  ...allVidsFeatures,
  ...allVidsFeaturesMobileP,
  ...allEndVidsFeatures,
  ...allEndVidsFeaturesMobileP,
];
let activeVidAllWrapper;
let vidFlag;
let newTimer;
//....................................................................
//COMPONENTS DEFINITIONS
const allButtonsDatalinks = document.querySelectorAll(".button-datalink");
const componentHeaderMain = "Explode/Assemble";
const componentTextMain =
  "Hover/click the dots for details about particular components. Use buttons below for exploded/assembled views.";
const allTextWrappersComponents =
  sectionComponents.querySelectorAll(".text-wrapper");
const allDotsComponents = document.querySelectorAll(".map_dot");
const allFullWrappersComponents =
  sectionComponents.querySelectorAll(".full-wrapper");
const vidComponentsExplode = document.querySelector(".vid.comp-explode");
const vidComponentsExplodeMobileP = document.querySelector(
  ".vid.comp-explode-mobile-p"
);
const vidComponentsAssemble = document.querySelector(".vid.comp-assemble");
const vidComponentsAssembleMobileP = document.querySelector(
  ".vid.comp-assemble-mobile-p"
);
const allVidsComponents = [vidComponentsExplode, vidComponentsAssemble];
const allVidsComponentsMobileP = [
  vidComponentsExplodeMobileP,
  vidComponentsAssembleMobileP,
];
const allSectionVidsComponents = [
  ...allVidsComponents,
  ...allVidsComponentsMobileP,
];
const buttonComponentsExplode = document.querySelector(
  ".components-btn.explode"
);
const buttonComponentsAssemble = document.querySelector(
  ".components-btn.assemble"
);
const fullWrapperExplode = sectionComponents.querySelector(
  ".full-wrapper.explode"
);
let activeComponentsWrap = fullWrapperExplode;
let dotsFlag;
let datasheetButtonTimer;
let explodeOrAssemble;
let compNumberString;
let compContentActive = false;
//....................................................................
//DATASHEETS DEFINITIONS;
const blackout = document.querySelector(".blackout");
const buttonDatasheetsBack = document.querySelector(".datasheets-btn.back");
const gridDatasheets = document.querySelector(".datasheets-grid");

//....................................................................
const allFullWrappersDatasheets = document.querySelectorAll(
  ".full-wrapper.datasheet"
);
//....................................................................

const allVidsDatasheets = document.querySelectorAll(".vid.datasheet");
const allVidsDatasheetsMobileP = document.querySelectorAll(
  ".vid.datasheet-mobile-p"
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

let activeDatasheetComp;
let imageTextFlag = "text";
let fromExplodeAssemble = false;
//....................................................................
//INSTRUCTIONS DEFINITIONS;
const allFullWrappersInstructions =
  sectionInstructions.querySelectorAll(".full-wrapper");
const textWrapperInstructions =
  sectionInstructions.querySelector(".text-wrapper");
const allVidsInstructions = document.querySelectorAll(".vid.instruction");
const allVidsInstructionsMobileP = document.querySelectorAll(
  ".vid.instruction-mobile-p"
);
const allSectionVidsInstructions = [
  ...allVidsInstructions,
  ...allVidsInstructionsMobileP,
];
const allClickDivs = document.querySelectorAll(".click-div");
const pauseWrapper = document.querySelector(".pause-wrapper");
let ActiveFullWrapperInstructions;
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
const DeactivateAllSections = function () {
  allSections.forEach(function (el) {
    el.classList.remove("active");
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
    if (el.classList.contains("end")) el.pause();
  });
};
const SetSectionText = function (activeSection) {
  const sectionFlag = activeSection.classList[0].slice(8);
  activeSection.querySelectorAll(".text-wrapper").forEach(function (el) {
    el.classList.remove("active");
  });
  switch (sectionFlag) {
    case "features":
      activeSection
        .querySelector(".full-wrapper.main")
        .querySelector(".text-wrapper")
        .classList.add("active");
      break;
    case "components":
      activeSection
        .querySelector(".full-wrapper.explode")
        .querySelector(".text-wrapper")
        .classList.add("active");
      break;
    // case "datasheets":
    //   activeSection.querySelector(".full-wrapper.comp");
  }
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
const ActivateSection = function (activeSectionFlag) {
  allNavLinks.forEach(function (el) {
    el.classList.remove("current");
    if (el.classList.contains(activeSectionFlag)) el.classList.add("current");
  });
  const activeSection = document.querySelector(`.section_${activeSectionFlag}`);
  //deactivate all sections
  //deactivate all buttons
  //reset and pause all vids
  //set section text
  //set section special elements
  //flash blackout
  //activate section
  DeactivateAllSections();
  DeactivateAllButtons();
  ResetAllVideos();
  SetSectionText(activeSection);
  switch (activeSectionFlag) {
    case "features":
      // allFullWrappersFeatures.forEach(function (el) {
      //   el.classList.remove("active");
      //   if (el.classList.contains("main")) {
      //     el.classList.add("active");
      //     activeVidAllWrapper = el;
      //   }
      // });
      // allTextWrappersFeatures.forEach(function (el) {
      //   el.classList.remove("active");
      // });
      // activeVidAllWrapper
      //   .querySelector(".text-wrapper")
      //   .classList.add("active");
      // allVidsFeatures.forEach(function (el) {
      //   el.classList.remove("active");
      //   if (el.classList.contains("main")) el.classList.add("active");
      // });
      allButtonsFeatures.forEach(function (el) {
        el.classList.add("active");
      });
      ctrlBtnWrapper.classList.add("active");
      sectionFeatures.classList.add("active");
      if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
      break;
    case "components":
      // ResetAllVideos();
      allFullWrappersComponents.forEach(function (el) {
        el.classList.remove("active");
      });
      fullWrapperExplode.classList.add("active");
      activeComponentsWrap = fullWrapperExplode;
      activeComponentsWrap
        .querySelector(".dots-wrapper")
        .classList.add("active");
      dotsFlag = "";
      // fullWrapperExplode.querySelector(".text-wrapper").classList.add("active");
      buttonComponentsAssemble.classList.remove("active");
      buttonComponentsExplode.classList.add("active");
      ctrlBtnWrapper.classList.add("active");
      sectionComponents.classList.add("active");
      if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
      break;
    case "datasheets":
      ResetAllVideos();
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
        el.querySelector(".dimmer").classList.add("off");
        el.querySelectorAll(".img").forEach((el2) =>
          el2.classList.remove("active")
        );
      });
      gridDatasheets.style.display = "grid";
      setTimeout(function () {
        gridDatasheets.classList.add("active");
      }, FADE_IN_DATASHEETS_GRID);
      fromExplodeAssemble = false;
      ctrlBtnWrapper.classList.remove("active");
      sectionDatasheets.classList.add("active");
      if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
      break;
    case "instructions":
      ResetToInstructionsMainScreen();
      allButtonsInstructions.forEach(function (el) {
        el.classList.add("active");
      });
      ctrlBtnWrapper.classList.add("active");
      ResetAllVideos();
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
allVidsFeatures.forEach(function (el) {
  el.addEventListener("ended", function () {
    el.parentElement.parentElement.parentElement
      .querySelector(".text-wrapper")
      .classList.add("active");
    SetActiveEndVidAndPlay(vidFlag);
  });
});
const SetActiveVidAndPlay = function (vidFlag) {
  RewindAndPauseAllFeatureVids();
  allVidWrappersFeatures.forEach(function (el) {
    el.classList.add("active");
  });
  activeVidAllWrapper = DeactivateAllActivateOne(
    allFullWrappersFeatures,
    "active",
    vidFlag
  );

  allTextWrappersFeatures.forEach(function (el) {
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
  activeVidAllWrapper.querySelector(".vid.feature-end").play();
  activeVidAllWrapper.querySelector(".vid.feature-end-mobile-p").play();
};
//....................................................................
//COMPONENTS SECTION
allDotsComponents.forEach(function (el) {
  el.addEventListener("click", function () {
    compContentActive = true;
    FadeInTextWrapperContent();
    activeComponentsWrap.querySelector(".heading-generic").innerHTML =
      el.querySelector(".map_dot-name").innerHTML;
    activeComponentsWrap.querySelector(".text-generic").innerHTML =
      el.querySelector(".map_dot-description").innerHTML;
    activeComponentsWrap
      .querySelector(".button-datalink")
      .classList.add("active");
  });
  el.addEventListener("mouseover", function () {
    clearTimeout(datasheetButtonTimer);
  });
  el.addEventListener("mouseout", function () {
    datasheetButtonTimer = setTimeout(function () {
      ResetTextWrapperContent(true);
      compContentActive = false;
    }, DATASHEET_BUTTON_TIMER);
  });
});
allTextWrappersComponents.forEach(function (el) {
  el.addEventListener("mouseover", function () {
    clearTimeout(datasheetButtonTimer);
  });
  el.addEventListener("mouseout", function () {
    datasheetButtonTimer = setTimeout(function () {
      ResetTextWrapperContent(true);
      compContentActive = false;
    }, DATASHEET_BUTTON_TIMER);
  });
});
allVidsComponents.forEach(function (el) {
  el.addEventListener("ended", function () {
    const pastActiveComponentsWrap = activeComponentsWrap;
    if (activeComponentsWrap.classList.contains("explode")) {
      SetActiveComponentsWrapper("assemble");
    } else {
      SetActiveComponentsWrapper("explode");
    }
    ToggleComponentsImage(pastActiveComponentsWrap, true);
    allButtonsComponents.forEach(function (el) {
      el.classList.remove("active");
      if (el.classList.contains(dotsFlag)) {
        el.classList.add("active");
      }
    });
    ToggleComponentsImage(activeComponentsWrap, true);
    compContentActive = true;
    FadeInTextWrapperContent();
    compContentActive = false;
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
    OpenDatasheet(compNumberString, explodeOrAssemble);
  });
});
ctrlBtnWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".components-btn");
  if (!clicked) return;
  allVidsComponents.forEach(function (el) {
    el.currentTime = 0;
  });
  allVidsComponentsMobileP.forEach(function (el) {
    el.currentTime = 0;
  });
  dotsFlag = clicked.classList[1];
  activeComponentsWrap
    .querySelector(".text-wrapper")
    .classList.remove("active");
  ToggleComponentsImage(activeComponentsWrap, false);
  ResetTextWrapperContent(false);
  PlayActiveComponentsVideo();
});
const ActivateButtonsComponents = function () {
  allButtonsDatasheets.forEach(function (el) {
    el.classList.remove("active");
  });
  allButtonsComponents.forEach(function (el) {
    el.classList.add("active");
  });
  if (activeComponentsWrap.classList.contains("explode")) {
    buttonComponentsAssemble.classList.remove("active");
  } else buttonComponentsExplode.classList.remove("active");
  ctrlBtnWrapper.classList.add("active");
};
const FadeInTextWrapperContent = function () {
  if (!compContentActive) return;
  activeComponentsWrap
    .querySelector(".text-wrapper")
    .classList.remove("active");
  setTimeout(function () {
    activeComponentsWrap.querySelector(".text-wrapper").classList.add("active");
  }, FADE_IN_COMPONENTS_HEADING);
};
const ResetTextWrapperContent = function (fadeInTopWrapperBool) {
  if (fadeInTopWrapperBool) FadeInTextWrapperContent();
  activeComponentsWrap.querySelector(".heading-generic").innerHTML =
    componentHeaderMain;
  activeComponentsWrap.querySelector(".text-generic").innerHTML =
    componentTextMain;
  activeComponentsWrap
    .querySelector(".button-datalink")
    .classList.remove("active");
};
const SetActiveComponentsWrapper = function (value) {
  dotsFlag = value;
  allFullWrappersComponents.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains(dotsFlag)) {
      el.classList.add("active");
      activeComponentsWrap = el;
    }
  });
};
const ToggleComponentsImage = function (activeImage, state) {
  const allActiveDotsImages = activeImage.querySelectorAll(".dots-wrapper");
  allActiveDotsImages.forEach(function (el) {
    state ? el.classList.add("active") : el.classList.remove("active");
  });
};
const PlayActiveComponentsVideo = function () {
  const vidArray = [
    document.querySelector(`.vid.comp-${dotsFlag}`),
    document.querySelector(`.vid.comp-${dotsFlag}-mobile-p`),
  ];
  vidArray.forEach((el) => el.play());
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
  document.querySelector(`.datasheet-card-wrapper.${value}`).click();
};
//....................................................................
// DATASHEETS SECTION
ctrlBtnWrapper.addEventListener("click", function (e) {
  const clicked = e.target.closest(".datasheets-btn");
  if (!clicked) return;
  if (clicked.classList.contains("back")) {
    ReturnToComponentsSection();
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
      el.querySelector(".dimmer").classList.add("off");
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
gridDatasheets.addEventListener("click", function (e) {
  const clicked = e.target.closest(".datasheet-card-wrapper");
  let datasheetIndex;
  if (!clicked) return;
  allVidsDatasheets.forEach(function (el) {
    el.currentTime = 0;
  });
  allVidsDatasheetsMobileP.forEach(function (el) {
    el.currentTime = 0;
  });
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
    activeDatasheetComp.querySelector(".dimmer").classList.remove("off");
    activeDatasheetComp
      .querySelectorAll(".img")
      .forEach((el2) => el2.classList.add("active"));
    activeDatasheetComp.querySelector(".text-wrapper").classList.add("active");
    ActivateButtonsDatasheets();
    ctrlBtnWrapper.classList.add("active");
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
          .classList.add("off")
      : el.parentElement.parentElement.parentElement
          .querySelector(".dimmer")
          .classList.remove("off");
  });
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
const ReturnToComponentsSection = function () {
  navLinkDatasheets.classList.remove("current");
  navLinkComponents.classList.add("current");
  sectionDatasheets.classList.remove("active");
  document.querySelector(".datasheets-btn.datasheets").click(); //reset the section - universal type function?
  FlashBlackout(FLASH_BLACKOUT);
  document;
  sectionComponents
    .querySelector(`.full-wrapper.${explodeOrAssemble}`)
    .querySelector(".dots-wrapper")
    .classList.add("active");
  document;
  sectionComponents
    .querySelector(`.full-wrapper.${explodeOrAssemble}`)
    .classList.add("active");
  sectionComponents.classList.add("active");
  ActivateButtonsComponents();
};
const ActivateFullWrapperDatasheets = function (value) {
  ctrlBtnWrapper.classList.remove("active");
  gridDatasheets.classList.remove("active");
  gridDatasheets.style.display = "none";
  if (!fromExplodeAssemble) FlashBlackout();
  allFullWrappersDatasheets.forEach(function (el) {
    el.classList.remove("active");
    const activeDatasheet = allFullWrappersDatasheets[value];
    activeDatasheet.classList.add("active");
    setTimeout(function () {
      activeDatasheet.querySelector(".vid.datasheet").play();
      activeDatasheet.querySelector(".vid.datasheet-mobile-p").play();
    }, PLAY_DATASHEET_VID_AFTER_DELAY);
  });
  activeDatasheetComp = allFullWrappersDatasheets[value];
};
//....................................................................
//INSTRUCTIONS SECTION
allClickDivs.forEach(function (el) {
  el.addEventListener("click", function () {
    if (pauseFlag) {
      ActiveFullWrapperInstructions.querySelector(".vid.instruction").play();
      ActiveFullWrapperInstructions.querySelector(
        ".vid.instruction-mobile-p"
      ).play();
      pauseWrapper.classList.remove("active");
      pauseFlag = false;
    } else {
      clearTimeout(instructionVidTimer);
      instructionVidTimer = null;
      ActiveFullWrapperInstructions.querySelector(".vid.instruction").pause();
      ActiveFullWrapperInstructions.querySelector(
        ".vid.instruction-mobile-p"
      ).pause();
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
        .querySelector(".vid.instruction-mobile-p")
        .pause();
    } else {
      instructionVidTimer = setTimeout(function () {
        currentVid += 1;
        if (currentVid > 4 && instructionVidLooping) {
          currentVid = 1;
        } else if (currentVid > 4 && !instructionVidLooping) {
          FlashBlackout(FLASH_BLACKOUT);
          ResetToInstructionsMainScreen();
          return;
        }
        ActivateFullWrapperInstructionsAndPlayVids(`step-${currentVid}`);
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
  const clicked = e.target.closest(".instructions-btn");
  if (!clicked) return;
  clearTimeout(instructionVidTimer);
  instructionVidTimer = null;
  textWrapperInstructions.classList.remove("active");
  pauseFlag = false;
  pauseWrapper.classList.remove("active");
  allFullWrappersInstructions.forEach(function (el) {
    el.classList.remove("active");
  });
  allVidsInstructions.forEach(function (el) {
    el.currentTime = 0;
    el.pause();
  });
  currentVid = Array.from(allButtonsInstructions).indexOf(clicked) + 1;
  ActivateFullWrapperInstructionsAndPlayVids(`step-${currentVid}`);
});
const ActivateFullWrapperInstructionsAndPlayVids = function (value) {
  allFullWrappersInstructions.forEach(function (el) {
    el.classList.remove("active");
    if (el.classList.contains(value)) {
      el.classList.add("active");
      ActiveFullWrapperInstructions = el;
      ActiveFullWrapperInstructions.querySelectorAll(
        ".vid.instruction"
      ).forEach(function (el2) {
        el2.play();
      });
      ActiveFullWrapperInstructions.querySelectorAll(
        ".vid.instruction-mobile-p"
      ).forEach(function (el2) {
        el2.play();
      });
    }
  });
  allButtonsInstructions.forEach(function (el) {
    el.classList.remove("current", "hovered");
    if (el.classList.contains(value)) el.classList.add("current");
  });
};
const ResetToInstructionsMainScreen = function () {
  pauseFlag = false;
  pauseWrapper.classList.remove("active");
  sectionInstructions.classList.add("active");
  textWrapperInstructions.classList.add("active");
  allButtonsInstructions.forEach(function (el) {
    el.classList.remove("current");
  });
  allFullWrappersInstructions.forEach(function (el) {
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
