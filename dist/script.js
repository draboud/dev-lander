(() => {
  // script.js
  console.log("universal-ops");
  var blackoutFlag = true;
  var FEATURE_MAIN_VID_REPLAY = 5e3;
  var DATASHEET_BUTTON_TIMER = 1500;
  var FADE_IN_COMPONENTS_HEADING = 25;
  var FADE_IN_DATASHEETS_GRID = 25;
  var FLASH_BLACKOUT = 50;
  var FLASH_START_BLACKOUT = 200;
  var PLAY_DATASHEET_VID_AFTER_DELAY = 200;
  var PAUSE_BETWEEN_INSTRUCTION_VIDS = 2e3;
  var navBar = document.querySelector(".nav_menu");
  var navLinkFeatures = document.querySelector(".nav_menu_link.features");
  var navLinkComponents = document.querySelector(".nav_menu_link.components");
  var navLinkDatasheets = document.querySelector(".nav_menu_link.datasheets");
  var navLinkInstructions = document.querySelector(
    ".nav_menu_link.instructions"
  );
  var allNavLinks = document.querySelectorAll(".nav_menu_link");
  var sectionFeatures = document.querySelector(".section_features");
  var sectionComponents = document.querySelector(".section_components");
  var sectionDatasheets = document.querySelector(".section_datasheets");
  var sectionInstructions = document.querySelector(".section_instructions");
  var allSections = [
    sectionFeatures,
    sectionComponents,
    sectionDatasheets,
    sectionInstructions
  ];
  var ctrlBtnWrapper = document.querySelector(".ctrl-btn-wrapper");
  var allFeaturesButtons = document.querySelectorAll(".features-btn");
  var allComponentsButtons = document.querySelectorAll(".components-btn");
  var allDatasheetsBtns = document.querySelectorAll(".datasheets-btn");
  var allInstructionsButtons = document.querySelectorAll(".instructions-btn");
  var allCtrlButtons = [
    ...allFeaturesButtons,
    ...allComponentsButtons,
    ...allDatasheetsBtns,
    ...allInstructionsButtons
  ];
  var allFeatureAllWrappers = sectionFeatures.querySelectorAll(".all-wrapper");
  var allFeatureTextWrappers = sectionFeatures.querySelectorAll(".text-wrapper");
  var allFeatureVidWrappers = sectionFeatures.querySelectorAll(".video-wrapper");
  var allFeatureVids = document.querySelectorAll(".vid.feature");
  var allFeatureVidsMobileP = document.querySelectorAll(
    ".vid.feature-mobile-p"
  );
  var allFeatureEndVids = document.querySelectorAll(".vid.end");
  var allFeatureEndVidsMobileP = document.querySelectorAll(".vid.end-mobile-p");
  var allSectionVidsFeatures = [
    ...allFeatureVids,
    ...allFeatureVidsMobileP,
    ...allFeatureEndVids,
    ...allFeatureEndVidsMobileP
  ];
  var activeVidAllWrapper;
  var vidFlag;
  var newTimer;
  var allDatasheetButtons = document.querySelectorAll(".button-datasheet");
  var mainComponentHeader = "Explode/Assemble";
  var mainComponentText = "Hover/click the dots for details about particular components. Use buttons below for exploded/assembled views.";
  var allComponentTextWrappers = sectionComponents.querySelectorAll(".text-wrapper");
  var allDots = document.querySelectorAll(".map_dot");
  var allComponentAllWrappers = sectionComponents.querySelectorAll(".all-wrapper");
  var componentVidExplode = document.querySelector(".vid.explode");
  var componentVidExplodeMobileP = document.querySelector(
    ".vid.explode-mobile-p"
  );
  var componentVidAssemble = document.querySelector(".vid.assemble");
  var componentVidAssembleMobileP = document.querySelector(
    ".vid.assemble-mobile-p"
  );
  var allComponentVids = [componentVidExplode, componentVidAssemble];
  var allComponentVidsMobileP = [
    componentVidExplodeMobileP,
    componentVidAssembleMobileP
  ];
  var allSectionVidsComponents = [
    ...allComponentVids,
    ...allComponentVidsMobileP
  ];
  var componentsExplodeButton = document.querySelector(
    ".components-btn.explode"
  );
  var componentAssembleButton = document.querySelector(
    ".components-btn.assemble"
  );
  var allWrapperExplode = sectionComponents.querySelector(
    ".all-wrapper.explode"
  );
  var activeComponentsWrap = allWrapperExplode;
  var dotsFlag;
  var datasheetButtonTimer;
  var explodeOrAssemble;
  var compNumberString;
  var compContentActive = false;
  var blackout = document.querySelector(".blackout");
  var datasheetsBackButton = document.querySelector(".datasheets-btn.back");
  var datasheetsAllWrapper = document.querySelector(".datasheets-grid");
  var allDatasheetWrappers = document.querySelectorAll(
    ".datasheet-all-wrapper"
  );
  var allDatasheetVids = document.querySelectorAll(".vid.datazoom");
  var allDatasheetVidsMobileP = document.querySelectorAll(
    ".vid.datazoom-mobile-p"
  );
  var allSectionVidsDatasheets = [
    ...allDatasheetVids,
    ...allDatasheetVidsMobileP
  ];
  var allTextImageButtons = document.querySelectorAll(".text-image-btn");
  var allDatasheetSubHeadings = document.querySelectorAll(
    ".datasheet-subheading"
  );
  var allDatasheetText = document.querySelectorAll(".datasheet-text");
  var activeDatasheetComp;
  var imageTextFlag = "text";
  var fromExplodeAssemble = false;
  var allInstructionAllWrappers = sectionInstructions.querySelectorAll(".all-wrapper");
  var instructionsTextWrapper = sectionInstructions.querySelector(".text-wrapper");
  var allInstructionVids = document.querySelectorAll(".vid.instruction");
  var allInstructionVidsMobileP = document.querySelectorAll(
    ".vid.instruction-mobile-p"
  );
  var allSectionVidsInstructions = [
    ...allInstructionVids,
    ...allInstructionVidsMobileP
  ];
  var allClickDivs = document.querySelectorAll(".click-div");
  var pauseWrapper = document.querySelector(".pause-wrapper");
  var ActiveInstructionAllWrapper;
  var currentVid = 1;
  var instructionVidTimer;
  var pauseFlag = false;
  var instructionVidLooping = false;
  var allVideos = [
    ...allSectionVidsFeatures,
    ...allSectionVidsComponents,
    ...allSectionVidsDatasheets,
    ...allSectionVidsInstructions
  ];
  var ResetAndPauseAllVideos = function() {
    allVideos.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
  };
  var FlashBlackout = function(value) {
    blackout.classList.remove("off");
    setTimeout(function() {
      blackout.classList.add("off");
    }, value);
  };
  navBar.addEventListener("click", function(e) {
    const clicked = e.target.closest(".nav_menu_link");
    if (!clicked) return;
    const activeSectionFlag = clicked.classList[1];
    ActivateSection(activeSectionFlag);
  });
  var ActivateSection = function(value) {
    allNavLinks.forEach(function(el) {
      el.classList.remove("current");
      if (el.classList.contains(value)) el.classList.add("current");
    });
    allSections.forEach(function(el) {
      el.classList.remove("active");
    });
    allCtrlButtons.forEach(function(el) {
      el.classList.remove("active");
    });
    switch (value) {
      case "features":
        ResetAndPauseAllVideos();
        allFeatureAllWrappers.forEach(function(el) {
          el.classList.remove("active");
          if (el.classList.contains("main")) {
            el.classList.add("active");
            activeVidAllWrapper = el;
          }
        });
        allFeatureTextWrappers.forEach(function(el) {
          el.classList.remove("active");
        });
        activeVidAllWrapper.querySelector(".text-wrapper").classList.add("active");
        allFeatureVids.forEach(function(el) {
          el.classList.remove("active");
          if (el.classList.contains("main")) el.classList.add("active");
        });
        allFeaturesButtons.forEach(function(el) {
          el.classList.add("active");
        });
        ctrlBtnWrapper.classList.add("active");
        sectionFeatures.classList.add("active");
        if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
        break;
      case "components":
        ResetAndPauseAllVideos();
        allComponentAllWrappers.forEach(function(el) {
          el.classList.remove("active");
        });
        allWrapperExplode.classList.add("active");
        activeComponentsWrap = allWrapperExplode;
        activeComponentsWrap.querySelector(".dots-wrapper").classList.add("active");
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
          (el) => el.querySelector(".text-image-btn-text").innerHTML = "image"
        );
        allDatasheetSubHeadings.forEach((el) => el.classList.add("active"));
        allDatasheetText.forEach((el) => el.classList.add("active"));
        allDatasheetWrappers.forEach(function(el) {
          el.classList.remove("active");
          el.querySelector(".text-wrapper").classList.remove("active");
          el.querySelector(".dimmer").classList.add("off");
          el.querySelectorAll(".img").forEach(
            (el2) => el2.classList.remove("active")
          );
        });
        datasheetsAllWrapper.style.display = "grid";
        setTimeout(function() {
          datasheetsAllWrapper.classList.add("active");
        }, FADE_IN_DATASHEETS_GRID);
        fromExplodeAssemble = false;
        ctrlBtnWrapper.classList.remove("active");
        sectionDatasheets.classList.add("active");
        if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
        break;
      case "instructions":
        ResetToMainScreen();
        allInstructionsButtons.forEach(function(el) {
          el.classList.add("active");
        });
        ctrlBtnWrapper.classList.add("active");
        ResetAndPauseAllVideos();
        sectionInstructions.classList.add("active");
        if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
        break;
    }
  };
  blackout.classList.remove("off");
  document.querySelector(".nav_component").style.display = "none";
  window.addEventListener("load", function() {
    navLinkInstructions.click();
    navLinkDatasheets.click();
    navLinkComponents.click();
    navLinkFeatures.click();
    blackoutFlag = false;
    this.setTimeout(function() {
      this.document.querySelector(".nav_component").style.display = "flex";
      blackout.classList.add("off");
    }, FLASH_START_BLACKOUT);
  });
  var DeactivateAllActivateOne = function(deactivate, className, activate) {
    let activatedValue;
    deactivate.forEach(function(el) {
      el.classList.remove(className);
      if (el.classList.contains(activate)) {
        el.classList.add(className);
        activatedValue = el;
      }
    });
    return activatedValue;
  };
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".features-btn");
    if (!clicked) return;
    vidFlag = clicked.classList[1];
    clearTimeout(newTimer);
    newTimer = setTimeout(() => {
      SetActiveVidAndPlay("main");
    }, FEATURE_MAIN_VID_REPLAY);
    SetActiveVidAndPlay(vidFlag);
  });
  allFeatureVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      el.parentElement.parentElement.parentElement.querySelector(".text-wrapper").classList.add("active");
      SetActiveEndVidAndPlay(vidFlag);
    });
  });
  var SetActiveVidAndPlay = function(vidFlag2) {
    RewindAndPauseAllFeatureVids();
    allFeatureVidWrappers.forEach(function(el) {
      el.classList.add("active");
    });
    activeVidAllWrapper = DeactivateAllActivateOne(
      allFeatureAllWrappers,
      "active",
      vidFlag2
    );
    allFeatureTextWrappers.forEach(function(el) {
      el.classList.remove("active");
    });
    if (vidFlag2 === "main") {
      activeVidAllWrapper.querySelector(".text-wrapper").classList.add("active");
      return;
    }
    activeVidAllWrapper.querySelector(".vid.feature").play();
    activeVidAllWrapper.querySelector(".vid.feature-mobile-p").play();
  };
  var RewindAndPauseAllFeatureVids = function() {
    allSectionVidsFeatures.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
  };
  var SetActiveEndVidAndPlay = function() {
    activeVidAllWrapper.querySelectorAll(".video-wrapper").forEach(function(el) {
      el.classList.remove("active");
    });
    activeVidAllWrapper.querySelector(".vid.end").play();
    activeVidAllWrapper.querySelector(".vid.end-mobile-p").play();
  };
  allDots.forEach(function(el) {
    el.addEventListener("click", function() {
      compContentActive = true;
      FadeInTopWrapperContent();
      activeComponentsWrap.querySelector(".heading-style-h2").innerHTML = el.querySelector(".map_dot-name").innerHTML;
      activeComponentsWrap.querySelector(".text-size-regular").innerHTML = el.querySelector(".map_dot-description").innerHTML;
      activeComponentsWrap.querySelector(".button-datasheet").classList.add("active");
    });
    el.addEventListener("mouseover", function() {
      clearTimeout(datasheetButtonTimer);
    });
    el.addEventListener("mouseout", function() {
      datasheetButtonTimer = setTimeout(function() {
        ResetTopWrapperContent(true);
        compContentActive = false;
      }, DATASHEET_BUTTON_TIMER);
    });
  });
  allComponentTextWrappers.forEach(function(el) {
    el.addEventListener("mouseover", function() {
      clearTimeout(datasheetButtonTimer);
    });
    el.addEventListener("mouseout", function() {
      datasheetButtonTimer = setTimeout(function() {
        ResetTopWrapperContent(true);
        compContentActive = false;
      }, DATASHEET_BUTTON_TIMER);
    });
  });
  allComponentVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      const pastActiveComponentsWrap = activeComponentsWrap;
      if (activeComponentsWrap.classList.contains("explode")) {
        SetActiveDotsWrapper("assemble");
      } else {
        SetActiveDotsWrapper("explode");
      }
      ToggleDotsImage(pastActiveComponentsWrap, true);
      allComponentsButtons.forEach(function(el2) {
        el2.classList.remove("active");
        if (el2.classList.contains(dotsFlag)) {
          el2.classList.add("active");
        }
      });
      ToggleDotsImage(activeComponentsWrap, true);
      compContentActive = true;
      FadeInTopWrapperContent();
      compContentActive = false;
    });
  });
  allDatasheetButtons.forEach(function(el) {
    el.addEventListener("click", function() {
      explodeOrAssemble = el.parentElement.parentElement.classList[1];
      const compNumber = el.parentElement.querySelector(".heading-style-h2").innerHTML;
      if (compNumber.length > 11) {
        compNumberString = `comp-${compNumber.slice(-2)}`;
      } else {
        compNumberString = `comp-${compNumber[compNumber.length - 1]}`;
      }
      OpenDataSheet(compNumberString, explodeOrAssemble);
    });
  });
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".components-btn");
    if (!clicked) return;
    allComponentVids.forEach(function(el) {
      el.currentTime = 0;
    });
    allComponentVidsMobileP.forEach(function(el) {
      el.currentTime = 0;
    });
    dotsFlag = clicked.classList[1];
    activeComponentsWrap.querySelector(".text-wrapper").classList.remove("active");
    ToggleDotsImage(activeComponentsWrap, false);
    ResetTopWrapperContent(false);
    PlayActiveDotsVideo();
  });
  var ActivateDotsButtons = function() {
    allDatasheetButtons.forEach(function(el) {
      el.classList.remove("active");
    });
    allComponentsButtons.forEach(function(el) {
      el.classList.add("active");
    });
    if (activeComponentsWrap.classList.contains("explode")) {
      componentAssembleButton.classList.remove("active");
    } else componentsExplodeButton.classList.remove("active");
    ctrlBtnWrapper.classList.add("active");
  };
  var FadeInTopWrapperContent = function() {
    if (!compContentActive) return;
    activeComponentsWrap.querySelector(".text-wrapper").classList.remove("active");
    setTimeout(function() {
      activeComponentsWrap.querySelector(".text-wrapper").classList.add("active");
    }, FADE_IN_COMPONENTS_HEADING);
  };
  var ResetTopWrapperContent = function(fadeInTopWrapperBool) {
    if (fadeInTopWrapperBool) FadeInTopWrapperContent();
    activeComponentsWrap.querySelector(".heading-style-h2").innerHTML = mainComponentHeader;
    activeComponentsWrap.querySelector(".text-size-regular").innerHTML = mainComponentText;
    activeComponentsWrap.querySelector(".button-datasheet").classList.remove("active");
  };
  var SetActiveDotsWrapper = function(value) {
    dotsFlag = value;
    allComponentAllWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(dotsFlag)) {
        el.classList.add("active");
        activeComponentsWrap = el;
      }
    });
  };
  var ToggleDotsImage = function(activeImage, state) {
    const allActiveDotsImages = activeImage.querySelectorAll(".dots-wrapper");
    allActiveDotsImages.forEach(function(el) {
      state ? el.classList.add("active") : el.classList.remove("active");
    });
  };
  var PlayActiveDotsVideo = function() {
    const vidArray = [
      document.querySelector(`.vid.${dotsFlag}`),
      document.querySelector(`.vid.${dotsFlag}-mobile-p`)
    ];
    vidArray.forEach((el) => el.play());
  };
  var OpenDataSheet = function(value) {
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
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".datasheets-btn");
    if (!clicked) return;
    if (clicked.classList.contains("back")) {
      ReturnToExplodeAssemble();
    } else {
      datasheetsBackButton.classList.remove("active");
      imageTextFlag = "text";
      allTextImageButtons.forEach(
        (el) => el.querySelector(".text-image-btn-text").innerHTML = "image"
      );
      allDatasheetSubHeadings.forEach((el) => el.classList.add("active"));
      allDatasheetText.forEach((el) => el.classList.add("active"));
      allDatasheetWrappers.forEach(function(el) {
        el.classList.remove("active");
        el.querySelector(".text-wrapper").classList.remove("active");
        el.querySelector(".dimmer").classList.add("off");
        el.querySelectorAll(".img").forEach(
          (el2) => el2.classList.remove("active")
        );
      });
      allDatasheetVids.forEach(function(el) {
        el.currentTime = 0;
      });
      allDatasheetVidsMobileP.forEach(function(el) {
        el.currentTime = 0;
      });
      datasheetsAllWrapper.style.display = "grid";
      setTimeout(function() {
        datasheetsAllWrapper.classList.add("active");
      }, FADE_IN_DATASHEETS_GRID);
      fromExplodeAssemble = false;
      ctrlBtnWrapper.classList.remove("active");
    }
  });
  datasheetsAllWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".datasheet-card-wrapper");
    if (!clicked) return;
    allDatasheetVids.forEach(function(el) {
      el.currentTime = 0;
    });
    allDatasheetVidsMobileP.forEach(function(el) {
      el.currentTime = 0;
    });
    ActivateDataZoomWrapper(clicked.classList[1]);
  });
  allDatasheetVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      activeDatasheetComp.querySelector(".dimmer").classList.remove("off");
      activeDatasheetComp.querySelectorAll(".img").forEach((el2) => el2.classList.add("active"));
      activeDatasheetComp.querySelector(".text-wrapper").classList.add("active");
      ActivateDataZoomButons();
      ctrlBtnWrapper.classList.add("active");
    });
  });
  allTextImageButtons.forEach(function(el) {
    el.addEventListener("click", function() {
      el.querySelector(".text-image-btn-text").innerHTML = imageTextFlag;
      imageTextFlag === "text" ? imageTextFlag = "image" : imageTextFlag = "text";
      el.parentElement.parentElement.querySelectorAll(".datasheet-subheading").forEach((el2) => el2.classList.toggle("active"));
      el.parentElement.parentElement.querySelectorAll(".datasheet-text").forEach((el3) => el3.classList.toggle("active"));
      imageTextFlag === "image" ? el.parentElement.parentElement.parentElement.querySelector(".dimmer").classList.add("off") : el.parentElement.parentElement.parentElement.querySelector(".dimmer").classList.remove("off");
    });
  });
  var ActivateDataZoomButons = function() {
    allComponentsButtons.forEach(function(el) {
      el.classList.remove("active");
    });
    allDatasheetButtons.forEach(function(el) {
      el.classList.add("active");
    });
    if (!fromExplodeAssemble) datasheetsBackButton.classList.remove("active");
  };
  var ReturnToExplodeAssemble = function() {
    navLinkDatasheets.classList.remove("current");
    navLinkComponents.classList.add("current");
    sectionDatasheets.classList.remove("active");
    document.querySelector(".datasheets-btn.datasheets").click();
    FlashBlackout(FLASH_BLACKOUT);
    document;
    sectionComponents.querySelector(`.all-wrapper.${explodeOrAssemble}`).querySelector(".dots-wrapper").classList.add("active");
    document;
    sectionComponents.querySelector(`.all-wrapper.${explodeOrAssemble}`).classList.add("active");
    sectionComponents.classList.add("active");
    ActivateDotsButtons();
  };
  var ActivateDataZoomWrapper = function(value) {
    ctrlBtnWrapper.classList.remove("active");
    datasheetsAllWrapper.classList.remove("active");
    datasheetsAllWrapper.style.display = "none";
    if (!fromExplodeAssemble) FlashBlackout();
    allDatasheetWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(value)) {
        el.classList.add("active");
        setTimeout(function() {
          el.querySelector(".vid.datazoom").play();
          el.querySelector(".vid.datazoom-mobile-p").play();
        }, PLAY_DATASHEET_VID_AFTER_DELAY);
      }
    });
    activeDatasheetComp = document.querySelector(
      `.datasheet-all-wrapper.${value}`
    );
  };
  allClickDivs.forEach(function(el) {
    el.addEventListener("click", function() {
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
  allInstructionVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      if (pauseFlag) {
        el.pause();
        el.parentElement.parentElement.parentElement.querySelector(".vid.instruction-mobile-p").pause();
      } else {
        instructionVidTimer = setTimeout(function() {
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
  allInstructionsButtons.forEach(function(el) {
    el.addEventListener("mouseenter", function() {
      el.classList.add("hovered");
    });
    el.addEventListener("mouseleave", function() {
      el.classList.remove("hovered");
    });
  });
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".instructions-btn");
    if (!clicked) return;
    clearTimeout(instructionVidTimer);
    instructionVidTimer = null;
    instructionsTextWrapper.classList.remove("active");
    pauseFlag = false;
    pauseWrapper.classList.remove("active");
    allInstructionAllWrappers.forEach(function(el) {
      el.classList.remove("active");
    });
    allInstructionVids.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    currentVid = Array.from(allInstructionsButtons).indexOf(clicked) + 1;
    ActivateAllWrapperAndPlayVids(`step-${currentVid}`);
  });
  var ActivateAllWrapperAndPlayVids = function(value) {
    allInstructionAllWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(value)) {
        el.classList.add("active");
        ActiveInstructionAllWrapper = el;
        ActiveInstructionAllWrapper.querySelectorAll(".vid.instruction").forEach(
          function(el2) {
            el2.play();
          }
        );
        ActiveInstructionAllWrapper.querySelectorAll(
          ".vid.instruction-mobile-p"
        ).forEach(function(el2) {
          el2.play();
        });
      }
    });
    allInstructionsButtons.forEach(function(el) {
      el.classList.remove("current", "hovered");
      if (el.classList.contains(value)) el.classList.add("current");
    });
  };
  var ResetToMainScreen = function() {
    pauseFlag = false;
    pauseWrapper.classList.remove("active");
    sectionInstructions.classList.add("active");
    instructionsTextWrapper.classList.add("active");
    allInstructionsButtons.forEach(function(el) {
      el.classList.remove("current");
    });
    allInstructionAllWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains("step-1")) el.classList.add("active");
      el.querySelector(".vid.instruction").currentTime = 0;
      el.querySelector(".vid.instruction-mobile-p").currentTime = 0;
      el.querySelector(".vid.instruction").pause();
      el.querySelector(".vid.instruction-mobile-p").pause();
    });
  };
})();
