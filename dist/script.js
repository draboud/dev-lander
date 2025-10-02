(() => {
  // script.js
  console.log("dev lander - Oct 1, 2025");
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
  var sectionMapDots = document.querySelector(".section_map-dots");
  var sectionDatasheets = document.querySelector(".section_datasheets");
  var sectionInstructions = document.querySelector(".section_instructions");
  var allSections = [
    sectionFeatures,
    sectionMapDots,
    sectionDatasheets,
    sectionInstructions
  ];
  var ctrlBtnWrapper = document.querySelector(".ctrl-btn-wrapper");
  var allFeatureButtons = document.querySelectorAll(".feature-btn");
  var allDotsButtons = document.querySelectorAll(".dots-btn");
  var allDataZoomBtns = document.querySelectorAll(".datazoom-btn");
  var allInstructionButtons = document.querySelectorAll(".instruction-btn");
  var allCtrlButtons = [
    ...allFeatureButtons,
    ...allDotsButtons,
    ...allDataZoomBtns,
    ...allInstructionButtons
  ];
  var allFeatureVidAllWrappers = document.querySelectorAll(".vid-all-wrapper");
  var allFeatureVidContentWrappers = document.querySelectorAll(
    ".vid-content-wrapper"
  );
  var allFeatureVidWrappers = document.querySelectorAll(".vid-wrapper");
  var allFeatureVids = document.querySelectorAll(".vid.feature");
  var allFeatureVidsMobileP = document.querySelectorAll(
    ".vid.feature-mobile-p"
  );
  var allFeatureEndVids = document.querySelectorAll(".vid.end");
  var allFeatureEndVidsMobileP = document.querySelectorAll(".vid.end-mobile-p");
  var activeVidAllWrapper;
  var vidFlag;
  var newTimer;
  var allDatasheetButtons = document.querySelectorAll(".button-datasheet");
  var baseHeader = "Explode/Assemble";
  var baseText = "Hover/click the dots for details about particular components. Use buttons below for exploded/assembled views.";
  var allDotTopContentWrappers = document.querySelectorAll(
    ".dots_wrap-top-wrapper"
  );
  var allDots = document.querySelectorAll(".map_dot");
  var allDotsAllWrappers = document.querySelectorAll(".dots-all-wrapper");
  var dotVidExplode = document.querySelector(".vid.explode");
  var dotVidExplodeMobileP = document.querySelector(".vid.explode-mobile-p");
  var dotVidAssemble = document.querySelector(".vid.assemble");
  var dotVidAssembleMobileP = document.querySelector(".vid.assemble-mobile-p");
  var allDotVids = [dotVidExplode, dotVidAssemble];
  var allDotVidsMobileP = [dotVidExplodeMobileP, dotVidAssembleMobileP];
  var dotExplodeButton = document.querySelector(".dots-btn.explode");
  var dotAssembleButton = document.querySelector(".dots-btn.assemble");
  var explodeDotsWrapper = document.querySelector(".dots-all-wrapper.explode");
  var activeDotsWrap = explodeDotsWrapper;
  var dotsFlag;
  var datasheetButtonTimer;
  var explodeOrAssemble;
  var compNumberString;
  var compContentActive = false;
  var blackout = document.querySelector(".blackout");
  var dataZoomBackButton = document.querySelector(".datazoom-btn.back");
  var datasheetsAllWrapper = document.querySelector(".datasheets-all-wrapper");
  var allDataZoomWrappers = document.querySelectorAll(
    ".datazooms-comp-wrapper"
  );
  var allDataZoomContentWrappers = document.querySelectorAll(
    ".datazoom-content-wrapper"
  );
  var allDataZoomDimmers = document.querySelectorAll(".dimmer");
  var allDataZoomImages = document.querySelectorAll(".datazoom-image");
  var allDataZoomVids = document.querySelectorAll(".vid.datazoom");
  var allTextImageButtons = document.querySelectorAll(".text-image-btn");
  var allDataZoomSubHeadings = document.querySelectorAll(
    ".datazoom-subheading"
  );
  var allDataZoomText = document.querySelectorAll(".datazoom-text");
  var activeDataZoomComp;
  var imageTextFlag = "text";
  var fromExplodeAssemble = false;
  var allInstructionAllWrappers = document.querySelectorAll(
    ".instruction-all-wrapper"
  );
  var instructionsContentWrapper = document.querySelector(
    ".instructions-content-wrapper"
  );
  var allInstructionVids = document.querySelectorAll(".vid.instruction");
  var allClickDivs = document.querySelectorAll(".click-div");
  var pauseWrapper = document.querySelector(".pause-wrapper");
  var ActiveInstructionAllWrapper;
  var currentVid = 1;
  var instructionVidTimer;
  var pauseFlag = false;
  var instructionVidLooping = false;
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
        allFeatureVidAllWrappers.forEach(function(el) {
          el.classList.remove("active");
          if (el.classList.contains("rotation")) {
            el.classList.add("active");
            activeVidAllWrapper = el;
          }
        });
        allFeatureVidContentWrappers.forEach(function(el) {
          el.classList.remove("active");
        });
        activeVidAllWrapper.querySelector(".vid-content-wrapper").classList.add("active");
        allFeatureVids.forEach(function(el) {
          el.classList.remove("active");
          if (el.classList.contains("rotation")) el.classList.add("active");
        });
        allFeatureButtons.forEach(function(el) {
          el.classList.add("active");
        });
        ctrlBtnWrapper.classList.add("active");
        sectionFeatures.classList.add("active");
        if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
        break;
      case "components":
        ResetAndPauseAllVideos();
        allDataZoomContentWrappers.forEach(function(el) {
          el.classList.remove("active");
        });
        allDataZoomDimmers.forEach(function(el) {
          el.classList.add("off");
        });
        allDataZoomImages.forEach(function(el) {
          el.classList.remove("active");
        });
        allDotsAllWrappers.forEach(function(el) {
          el.classList.remove("active");
        });
        explodeDotsWrapper.classList.add("active");
        activeDotsWrap = explodeDotsWrapper;
        activeDotsWrap.querySelector(".dots_wrap").classList.add("active");
        dotsFlag = "";
        explodeDotsWrapper.querySelector(".dots_wrap-top-wrapper").classList.add("active");
        dotAssembleButton.classList.remove("active");
        dotExplodeButton.classList.add("active");
        ctrlBtnWrapper.classList.add("active");
        sectionMapDots.classList.add("active");
        if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
        break;
      case "datasheets":
        ResetAndPauseAllVideos();
        dataZoomBackButton.classList.remove("active");
        imageTextFlag = "text";
        allTextImageButtons.forEach(
          (el) => el.querySelector(".text-image-btn-text").innerHTML = "image"
        );
        allDataZoomSubHeadings.forEach((el) => el.classList.add("active"));
        allDataZoomText.forEach((el) => el.classList.add("active"));
        allDataZoomWrappers.forEach(function(el) {
          el.classList.remove("active");
          el.querySelector(".datazoom-content-wrapper").classList.remove(
            "active"
          );
          el.querySelector(".dimmer").classList.add("off");
          el.querySelectorAll(".datazoom-image").forEach(
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
        allInstructionButtons.forEach(function(el) {
          el.classList.add("active");
        });
        ctrlBtnWrapper.classList.add("active");
        ResetAndPauseAllVideos();
        sectionInstructions.classList.add("active");
        if (!blackoutFlag) FlashBlackout(FLASH_BLACKOUT);
        break;
    }
  };
  var ResetAndPauseAllVideos = function() {
    allFeatureVids.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    allFeatureEndVids.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    allDotVids.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    allDotVidsMobileP.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    allDataZoomVids.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    allInstructionVids.forEach(function(el) {
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
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".feature-btn");
    if (!clicked) return;
    vidFlag = clicked.classList[1];
    clearTimeout(newTimer);
    newTimer = setTimeout(() => {
      SetActiveVidAndPlay("rotation");
    }, FEATURE_MAIN_VID_REPLAY);
    SetActiveVidAndPlay(vidFlag);
  });
  allFeatureVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      el.parentElement.parentElement.parentElement.querySelector(".vid-content-wrapper").classList.add("active");
      SetActiveEndVidAndPlay(vidFlag);
    });
  });
  var SetActiveVidAndPlay = function(vidFlag2) {
    allFeatureVids.forEach(function(el) {
      el.currentTime = 0;
    });
    allFeatureEndVids.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    allFeatureVidWrappers.forEach(function(el) {
      el.classList.add("active");
    });
    allFeatureVidAllWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(vidFlag2)) {
        el.classList.add("active");
        activeVidAllWrapper = el;
      }
    });
    allFeatureVidContentWrappers.forEach(function(el) {
      el.classList.remove("active");
    });
    if (vidFlag2 === "rotation") {
      activeVidAllWrapper.querySelector(".vid-content-wrapper").classList.add("active");
      return;
    }
    activeVidAllWrapper.querySelector(".vid.feature").play();
    activeVidAllWrapper.querySelector(".vid.feature-mobile-p").play();
  };
  var SetActiveEndVidAndPlay = function() {
    activeVidAllWrapper.querySelectorAll(".vid-wrapper").forEach(function(el) {
      el.classList.remove("active");
    });
    activeVidAllWrapper.querySelector(".vid.end").play();
    activeVidAllWrapper.querySelector(".vid.end-mobile-p").play();
  };
  allDots.forEach(function(el) {
    el.addEventListener("click", function() {
      compContentActive = true;
      FadeInTopWrapperContent();
      activeDotsWrap.querySelector(".heading-style-h2").innerHTML = el.querySelector(".map_dot-name").innerHTML;
      activeDotsWrap.querySelector(".text-size-regular").innerHTML = el.querySelector(".map_dot-description").innerHTML;
      activeDotsWrap.querySelector(".button-datasheet").classList.add("active");
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
  allDotTopContentWrappers.forEach(function(el) {
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
  allDotVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      const pastActiveDotsWrap = activeDotsWrap;
      if (activeDotsWrap.classList.contains("explode")) {
        SetActiveDotsWrapper("assemble");
      } else {
        SetActiveDotsWrapper("explode");
      }
      ToggleDotsImage(pastActiveDotsWrap, true);
      allDotsButtons.forEach(function(el2) {
        el2.classList.remove("active");
        if (el2.classList.contains(dotsFlag)) {
          el2.classList.add("active");
        }
      });
      ToggleDotsImage(activeDotsWrap, true);
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
    const clicked = e.target.closest(".dots-btn");
    if (!clicked) return;
    allDotVids.forEach(function(el) {
      el.currentTime = 0;
    });
    allDotVidsMobileP.forEach(function(el) {
      el.currentTime = 0;
    });
    dotsFlag = clicked.classList[1];
    activeDotsWrap.querySelector(".dots_wrap-top-wrapper").classList.remove("active");
    ToggleDotsImage(activeDotsWrap, false);
    ResetTopWrapperContent(false);
    PlayActiveDotsVideo();
  });
  var ActivateDotsButtons = function() {
    allDataZoomBtns.forEach(function(el) {
      el.classList.remove("active");
    });
    allDotsButtons.forEach(function(el) {
      el.classList.add("active");
    });
    if (activeDotsWrap.classList.contains("explode")) {
      dotAssembleButton.classList.remove("active");
    } else dotExplodeButton.classList.remove("active");
    ctrlBtnWrapper.classList.add("active");
  };
  var FadeInTopWrapperContent = function() {
    if (!compContentActive) return;
    activeDotsWrap.querySelector(".dots_wrap-top-wrapper").classList.remove("active");
    setTimeout(function() {
      activeDotsWrap.querySelector(".dots_wrap-top-wrapper").classList.add("active");
    }, FADE_IN_COMPONENTS_HEADING);
  };
  var ResetTopWrapperContent = function(fadeInTopWrapperBool) {
    if (fadeInTopWrapperBool) FadeInTopWrapperContent();
    activeDotsWrap.querySelector(".heading-style-h2").innerHTML = baseHeader;
    activeDotsWrap.querySelector(".text-size-regular").innerHTML = baseText;
    activeDotsWrap.querySelector(".button-datasheet").classList.remove("active");
  };
  var SetActiveDotsWrapper = function(value) {
    dotsFlag = value;
    allDotsAllWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(dotsFlag)) {
        el.classList.add("active");
        activeDotsWrap = el;
      }
    });
  };
  var ToggleDotsImage = function(activeImage, state) {
    const allActiveDotsImages = activeImage.querySelectorAll(".dots_wrap");
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
    sectionMapDots.classList.remove("active");
    navLinkComponents.classList.remove("current");
    navLinkDatasheets.classList.add("current");
    ResetTopWrapperContent(false);
    fromExplodeAssemble = true;
    document.querySelector(`.datasheet-card-wrapper.${value}`).click();
  };
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".datazoom-btn");
    if (!clicked) return;
    if (clicked.classList.contains("back")) {
      ReturnToExplodeAssemble();
    } else {
      dataZoomBackButton.classList.remove("active");
      imageTextFlag = "text";
      allTextImageButtons.forEach(
        (el) => el.querySelector(".text-image-btn-text").innerHTML = "image"
      );
      allDataZoomSubHeadings.forEach((el) => el.classList.add("active"));
      allDataZoomText.forEach((el) => el.classList.add("active"));
      allDataZoomWrappers.forEach(function(el) {
        el.classList.remove("active");
        el.querySelector(".datazoom-content-wrapper").classList.remove("active");
        el.querySelector(".dimmer").classList.add("off");
        el.querySelectorAll(".datazoom-image").forEach(
          (el2) => el2.classList.remove("active")
        );
      });
      allDataZoomVids.forEach(function(el) {
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
    allDataZoomVids.forEach(function(el) {
      el.currentTime = 0;
    });
    ActivateDataZoomWrapper(clicked.classList[1]);
  });
  allDataZoomVids.forEach(function(el) {
    el.addEventListener("ended", function() {
      activeDataZoomComp.querySelector(".dimmer").classList.remove("off");
      activeDataZoomComp.querySelectorAll(".datazoom-image").forEach((el2) => el2.classList.add("active"));
      activeDataZoomComp.querySelector(".datazoom-content-wrapper").classList.add("active");
      ActivateDataZoomButons();
      ctrlBtnWrapper.classList.add("active");
    });
  });
  allTextImageButtons.forEach(function(el) {
    el.addEventListener("click", function() {
      el.querySelector(".text-image-btn-text").innerHTML = imageTextFlag;
      imageTextFlag === "text" ? imageTextFlag = "image" : imageTextFlag = "text";
      el.parentElement.parentElement.querySelectorAll(".datazoom-subheading").forEach((el2) => el2.classList.toggle("active"));
      el.parentElement.parentElement.querySelectorAll(".datazoom-text").forEach((el3) => el3.classList.toggle("active"));
      imageTextFlag === "image" ? el.parentElement.parentElement.parentElement.querySelector(".dimmer").classList.add("off") : el.parentElement.parentElement.parentElement.querySelector(".dimmer").classList.remove("off");
    });
  });
  var ActivateDataZoomButons = function() {
    allDotsButtons.forEach(function(el) {
      el.classList.remove("active");
    });
    allDataZoomBtns.forEach(function(el) {
      el.classList.add("active");
    });
    if (!fromExplodeAssemble) dataZoomBackButton.classList.remove("active");
  };
  var ReturnToExplodeAssemble = function() {
    navLinkDatasheets.classList.remove("current");
    navLinkComponents.classList.add("current");
    sectionDatasheets.classList.remove("active");
    document.querySelector(".datazoom-btn.datasheets").click();
    FlashBlackout(FLASH_BLACKOUT);
    document.querySelector(`.dots-all-wrapper.${explodeOrAssemble}`).querySelector(".dots_wrap").classList.add("active");
    document.querySelector(`.dots-all-wrapper.${explodeOrAssemble}`).classList.add("active");
    sectionMapDots.classList.add("active");
    ActivateDotsButtons();
  };
  var ActivateDataZoomWrapper = function(value) {
    ctrlBtnWrapper.classList.remove("active");
    datasheetsAllWrapper.classList.remove("active");
    datasheetsAllWrapper.style.display = "none";
    if (!fromExplodeAssemble) FlashBlackout();
    allDataZoomWrappers.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(value)) {
        el.classList.add("active");
        el.querySelectorAll(".vid.datazoom").forEach(function(el2) {
          setTimeout(function() {
            el2.play();
          }, PLAY_DATASHEET_VID_AFTER_DELAY);
        });
      }
    });
    activeDataZoomComp = document.querySelector(
      `.datazooms-comp-wrapper.${value}`
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
  allInstructionButtons.forEach(function(el) {
    el.addEventListener("mouseenter", function() {
      el.classList.add("hovered");
    });
    el.addEventListener("mouseleave", function() {
      el.classList.remove("hovered");
    });
  });
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".instruction-btn");
    if (!clicked) return;
    clearTimeout(instructionVidTimer);
    instructionVidTimer = null;
    instructionsContentWrapper.classList.remove("active");
    pauseFlag = false;
    pauseWrapper.classList.remove("active");
    allInstructionAllWrappers.forEach(function(el) {
      el.classList.remove("active");
    });
    allInstructionVids.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    currentVid = Array.from(allInstructionButtons).indexOf(clicked) + 1;
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
    allInstructionButtons.forEach(function(el) {
      el.classList.remove("current", "hovered");
      if (el.classList.contains(value)) el.classList.add("current");
    });
  };
  var ResetToMainScreen = function() {
    pauseFlag = false;
    pauseWrapper.classList.remove("active");
    sectionInstructions.classList.add("active");
    instructionsContentWrapper.classList.add("active");
    allInstructionButtons.forEach(function(el) {
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
