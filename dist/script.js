(() => {
  // script.js
  console.log("section-vids-function: Oct 5, 2025 - TEST 1");
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
  var blackout = document.querySelector(".blackout");
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
  var allButtonsFeatures = document.querySelectorAll(".features-btn");
  var allButtonsComponents = document.querySelectorAll(".components-btn");
  var allButtonsDatasheets = document.querySelectorAll(".datasheets-btn");
  var allButtonsInstructions = document.querySelectorAll(".instructions-btn");
  var allCtrlButtons = [
    ...allButtonsFeatures,
    ...allButtonsComponents,
    ...allButtonsDatasheets,
    ...allButtonsInstructions
  ];
  var activeSection;
  var activeSectionName;
  var activeFullWrapper;
  var activeIndex;
  var allFullWrappersFeatures = sectionFeatures.querySelectorAll(".full-wrapper");
  var allTextWrappersFeatures = sectionFeatures.querySelectorAll(".text-wrapper");
  var allVidWrappersFeatures = sectionFeatures.querySelectorAll(".video-wrapper");
  var allVidsFeatures = document.querySelectorAll(".vid.features");
  var allVidsFeaturesMobileP = document.querySelectorAll(
    ".vid.features-mobile-p"
  );
  var allEndVidsFeatures = document.querySelectorAll(".vid.features-end");
  var allEndVidsFeaturesMobileP = document.querySelectorAll(
    ".features-end-mobile-p"
  );
  var allSectionVidsFeatures = [
    ...allVidsFeatures,
    ...allVidsFeaturesMobileP,
    ...allEndVidsFeatures,
    ...allEndVidsFeaturesMobileP
  ];
  var vidName;
  var newTimer;
  var allFullWrappersComponents = sectionComponents.querySelectorAll(".full-wrapper");
  var allButtonsDatalinks = document.querySelectorAll(".button-datalink");
  var componentHeaderMain = "Explode/Assemble";
  var componentTextMain = "Hover/click the dots for details about particular components. Use buttons below for exploded/assembled views.";
  var allTextWrappersComponents = sectionComponents.querySelectorAll(".text-wrapper");
  var allDotsComponents = document.querySelectorAll(".map_dot");
  var allVidsComponents = document.querySelectorAll(".vid.components");
  var allVidsComponentsMobileP = document.querySelectorAll(
    ".vid.components-mobile-p"
  );
  var allSectionVidsComponents = [
    ...allVidsComponents,
    ...allVidsComponentsMobileP
  ];
  var buttonComponentsExplode = document.querySelector(
    ".components-btn.explode"
  );
  var buttonComponentsAssemble = document.querySelector(
    ".components-btn.assemble"
  );
  var fullWrapperExplode = sectionComponents.querySelector(
    ".full-wrapper.explode"
  );
  var activeFullWrapperComponents = fullWrapperExplode;
  var dotsFlag;
  var datasheetButtonTimer;
  var explodeOrAssemble = "explode";
  var compNumberString;
  var compContentActive = false;
  var allFullWrappersDatasheets = document.querySelectorAll(
    ".full-wrapper.datasheet"
  );
  var buttonDatasheetsBack = document.querySelector(".datasheets-btn.back");
  var gridDatasheets = document.querySelector(".datasheets-grid");
  var allVidsDatasheets = document.querySelectorAll(".vid.datasheets");
  var allVidsDatasheetsMobileP = document.querySelectorAll(
    ".vid.datasheets-mobile-p"
  );
  var allSectionVidsDatasheets = [
    ...allVidsDatasheets,
    ...allVidsDatasheetsMobileP
  ];
  var allButtonsTextImage = document.querySelectorAll(".text-image-btn");
  var allDatasheetSubHeadings = document.querySelectorAll(
    ".datasheet-subheading"
  );
  var allDatasheetText = document.querySelectorAll(".datasheet-text");
  var activeFullWrapperDatasheets;
  var imageTextFlag = "text";
  var fromExplodeAssemble = false;
  var allFullWrappersInstructions = sectionInstructions.querySelectorAll(".full-wrapper");
  var textWrapperInstructions = sectionInstructions.querySelector(".text-wrapper");
  var allVidsInstructions = document.querySelectorAll(".vid.instructions");
  var allVidsInstructionsMobileP = document.querySelectorAll(
    ".vid.instructions-mobile-p"
  );
  var allSectionVidsInstructions = [
    ...allVidsInstructions,
    ...allVidsInstructionsMobileP
  ];
  var allClickDivs = document.querySelectorAll(".click-div");
  var pauseWrapper = document.querySelector(".pause-wrapper");
  var ActiveFullWrapperInstructions;
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
  var DeactivateAllSections = function() {
    allSections.forEach(function(el) {
      el.classList.remove("active");
    });
  };
  var DeactivateAllFullWrappers = function() {
    allSections.forEach(function(el) {
      el.querySelectorAll(".full-wrapper").forEach(function(el2) {
        el2.classList.remove("active");
      });
    });
  };
  var DeactivateAllButtons = function() {
    allCtrlButtons.forEach(function(el) {
      el.classList.remove("active");
    });
  };
  var ResetAllVideos = function() {
    allVideos.forEach(function(el) {
      el.currentTime = 0;
      if (el.classList.contains("end")) el.pause();
    });
  };
  var SetSectionFullWrapper = function(activeSection2, sectionName) {
    switch (sectionName) {
      case "features":
        activeSection2.querySelector(".full-wrapper.main").classList.add("active");
        break;
      case "components":
        activeSection2.querySelector(`.full-wrapper.${explodeOrAssemble}`).classList.add("active");
        break;
      case "datasheets":
        break;
      case "instructions":
        activeSection2.querySelector(".full-wrapper.step-1").classList.add("active");
        break;
    }
    const allFullWrappers = activeSection2.querySelectorAll(".full-wrapper");
    allFullWrappers.forEach(function(el, index) {
      if (el.classList.contains("active")) {
        activeFullWrapper = el;
        activeIndex = index;
      }
    });
  };
  var SetSectionText = function(activeSection2, sectionName) {
    activeSection2.querySelectorAll(".text-wrapper").forEach(function(el) {
      el.classList.remove("active");
    });
    switch (sectionName) {
      case "features":
        activeSection2.querySelector(".full-wrapper.main").querySelector(".text-wrapper").classList.add("active");
        break;
      case "components":
        activeSection2.querySelector(`.full-wrapper.${explodeOrAssemble}`).querySelector(".text-wrapper").classList.add("active");
        break;
      case "datasheets":
        allDatasheetSubHeadings.forEach((el) => el.classList.add("active"));
        allDatasheetText.forEach((el) => el.classList.add("active"));
        break;
      case "instructions":
        activeSection2.querySelector(".text-wrapper").classList.add("active");
        break;
    }
  };
  var SetSectionSpecialElements = function(sectionName) {
    switch (sectionName) {
      case "features":
        break;
      case "components":
        activeFullWrapperComponents = activeFullWrapper;
        activeFullWrapper.querySelector(".dots-wrapper").classList.add("active");
        SetAllDatasheets(false);
        dotsFlag = "";
        break;
      case "datasheets":
        imageTextFlag = "text";
        allButtonsTextImage.forEach(
          (el) => el.querySelector(".text-image-btn-text").innerHTML = "image"
        );
        allFullWrappersDatasheets.forEach(function(el) {
          el.querySelector(".dimmer").classList.remove("on");
          el.querySelectorAll(".img").forEach(
            (el2) => el2.classList.remove("active")
          );
        });
        gridDatasheets.style.display = "grid";
        setTimeout(function() {
          gridDatasheets.classList.add("active");
        }, FADE_IN_DATASHEETS_GRID);
        fromExplodeAssemble = false;
        break;
      case "instructions":
        pauseFlag = false;
        pauseWrapper.classList.remove("active");
        break;
    }
  };
  var SetSectionButtons = function(sectionName) {
    switch (sectionName) {
      case "features":
        allButtonsFeatures.forEach(function(el) {
          el.classList.add("active");
        });
        break;
      case "components":
        if (explodeOrAssemble === "explode") {
          buttonComponentsAssemble.classList.remove("active");
          buttonComponentsExplode.classList.add("active");
        } else {
          buttonComponentsAssemble.classList.add("active");
          buttonComponentsExplode.classList.remove("active");
        }
        break;
      case "datasheets":
        break;
      case "instructions":
        allButtonsInstructions.forEach(function(el) {
          el.classList.remove("current");
          el.classList.add("active");
        });
        break;
    }
  };
  var ActivateCtrlButtonWrapper = function(sectionName) {
    if (sectionName === "datasheets") return;
    ctrlBtnWrapper.classList.add("active");
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
    const clickedSectionName = clicked.classList[1];
    ActivateSection(clickedSectionName);
  });
  var ActivateSection = function(sectionName) {
    allNavLinks.forEach(function(el) {
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
  var DeactivateAllActivateOne = function(deactivate, className, activate) {
    let activatedValue;
    deactivate.forEach(function(el, index) {
      el.classList.remove(className);
      if (el.classList.contains(activate)) {
        el.classList.add(className);
        activatedValue = el;
        activeIndex = index;
      }
    });
    return activatedValue;
  };
  var PlaySectionVids = function(endVidFlag) {
    const allFullWrappers = activeSection.querySelectorAll(".full-wrapper");
    if (!endVidFlag) {
      allFullWrappers[activeIndex].querySelector(`.vid.${activeSectionName}`).play();
      allFullWrappers[activeIndex].querySelector(`.vid.${activeSectionName}-mobile-p`).play();
    } else {
      allFullWrappers[activeIndex].querySelector(`.vid.${activeSectionName}-end`).play();
      allFullWrappers[activeIndex].querySelector(`.vid.${activeSectionName}-end-mobile-p`).play();
    }
  };
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".features-btn");
    if (!clicked) return;
    vidName = clicked.classList[1];
    clearTimeout(newTimer);
    newTimer = setTimeout(() => {
      SetActiveVidAndPlay("main");
    }, FEATURE_MAIN_VID_REPLAY);
    SetActiveVidAndPlay(vidName);
  });
  allVidsFeatures.forEach(function(el) {
    el.addEventListener("ended", function() {
      el.parentElement.parentElement.parentElement.querySelector(".text-wrapper").classList.add("active");
      SetActiveEndVidAndPlay(vidName);
    });
  });
  var SetActiveVidAndPlay = function(vidName2) {
    RewindAndPauseAllFeatureVids();
    allVidWrappersFeatures.forEach(function(el) {
      el.classList.add("active");
    });
    activeFullWrapper = DeactivateAllActivateOne(
      allFullWrappersFeatures,
      "active",
      vidName2
    );
    allTextWrappersFeatures.forEach(function(el) {
      el.classList.remove("active");
    });
    if (vidName2 === "main") {
      activeFullWrapper.querySelector(".text-wrapper").classList.add("active");
      return;
    }
    PlaySectionVids(false);
  };
  var RewindAndPauseAllFeatureVids = function() {
    allSectionVidsFeatures.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
  };
  var SetActiveEndVidAndPlay = function() {
    activeFullWrapper.querySelectorAll(".video-wrapper").forEach(function(el) {
      el.classList.remove("active");
    });
    PlaySectionVids(true);
  };
  allDotsComponents.forEach(function(el) {
    el.addEventListener("click", function() {
      compContentActive = true;
      FadeInTextWrapperContent();
      activeFullWrapperComponents.querySelector(".heading-generic").innerHTML = el.querySelector(".map_dot-name").innerHTML;
      activeFullWrapperComponents.querySelector(".text-generic").innerHTML = el.querySelector(".map_dot-description").innerHTML;
      activeFullWrapperComponents.querySelector(".button-datalink").classList.add("active");
    });
    el.addEventListener("mouseover", function() {
      clearTimeout(datasheetButtonTimer);
    });
    el.addEventListener("mouseout", function() {
      datasheetButtonTimer = setTimeout(function() {
        ResetTextWrapperContent(true);
        compContentActive = false;
      }, DATASHEET_BUTTON_TIMER);
    });
  });
  allTextWrappersComponents.forEach(function(el) {
    el.addEventListener("mouseover", function() {
      clearTimeout(datasheetButtonTimer);
    });
    el.addEventListener("mouseout", function() {
      datasheetButtonTimer = setTimeout(function() {
        ResetTextWrapperContent(true);
        compContentActive = false;
      }, DATASHEET_BUTTON_TIMER);
    });
  });
  allVidsComponents.forEach(function(el) {
    el.addEventListener("ended", function() {
      const pastActiveFullWrapperComponents = activeFullWrapperComponents;
      if (activeFullWrapperComponents.classList.contains("explode")) {
        dotsFlag = "assemble";
      } else {
        dotsFlag = "explode";
      }
      activeFullWrapperComponents = DeactivateAllActivateOne(
        allFullWrappersComponents,
        "active",
        dotsFlag
      );
      ToggleComponentsImage(pastActiveFullWrapperComponents, true);
      allButtonsComponents.forEach(function(el2) {
        el2.classList.remove("active");
        if (el2.classList.contains(dotsFlag)) {
          el2.classList.add("active");
        }
      });
      ToggleComponentsImage(activeFullWrapperComponents, true);
      compContentActive = true;
      FadeInTextWrapperContent();
      compContentActive = false;
    });
  });
  allButtonsDatalinks.forEach(function(el) {
    el.addEventListener("click", function() {
      explodeOrAssemble = el.parentElement.parentElement.classList[1];
      const compNumber = el.parentElement.querySelector(".heading-generic").innerHTML;
      if (compNumber.length > 11) {
        compNumberString = `comp-${compNumber.slice(-2)}`;
      } else {
        compNumberString = `comp-${compNumber[compNumber.length - 1]}`;
      }
      OpenDatasheet(compNumberString, explodeOrAssemble);
    });
  });
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".components-btn");
    if (!clicked) return;
    allVidsComponents.forEach(function(el) {
      el.currentTime = 0;
    });
    allVidsComponentsMobileP.forEach(function(el) {
      el.currentTime = 0;
    });
    dotsFlag = clicked.classList[1];
    dotsFlag === "explode" ? explodeOrAssemble = "assemble" : explodeOrAssemble = "explode";
    activeFullWrapperComponents.querySelector(".text-wrapper").classList.remove("active");
    ToggleComponentsImage(activeFullWrapperComponents, false);
    ResetTextWrapperContent(false);
    PlaySectionVids(false);
  });
  var FadeInTextWrapperContent = function() {
    if (!compContentActive) return;
    activeFullWrapperComponents.querySelector(".text-wrapper").classList.remove("active");
    setTimeout(function() {
      activeFullWrapperComponents.querySelector(".text-wrapper").classList.add("active");
    }, FADE_IN_COMPONENTS_HEADING);
  };
  var ResetTextWrapperContent = function(fadeInTopWrapperBool) {
    if (fadeInTopWrapperBool) FadeInTextWrapperContent();
    activeFullWrapperComponents.querySelector(".heading-generic").innerHTML = componentHeaderMain;
    activeFullWrapperComponents.querySelector(".text-generic").innerHTML = componentTextMain;
    activeFullWrapperComponents.querySelector(".button-datalink").classList.remove("active");
  };
  var ToggleComponentsImage = function(activeImage, state) {
    const allActiveDotsImages = activeImage.querySelectorAll(".dots-wrapper");
    allActiveDotsImages.forEach(function(el) {
      state ? el.classList.add("active") : el.classList.remove("active");
    });
  };
  var OpenDatasheet = function(value) {
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
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".datasheets-btn");
    if (!clicked) return;
    if (clicked.classList.contains("back")) {
      ReturnToComponentsSection();
    } else {
      buttonDatasheetsBack.classList.remove("active");
      imageTextFlag = "text";
      allButtonsTextImage.forEach(
        (el) => el.querySelector(".text-image-btn-text").innerHTML = "image"
      );
      allDatasheetSubHeadings.forEach((el) => el.classList.add("active"));
      allDatasheetText.forEach((el) => el.classList.add("active"));
      allFullWrappersDatasheets.forEach(function(el) {
        el.classList.remove("active");
        el.querySelector(".text-wrapper").classList.remove("active");
        el.querySelector(".dimmer").classList.remove("on");
        el.querySelectorAll(".img").forEach(
          (el2) => el2.classList.remove("active")
        );
      });
      allVidsDatasheets.forEach(function(el) {
        el.currentTime = 0;
      });
      allVidsDatasheetsMobileP.forEach(function(el) {
        el.currentTime = 0;
      });
      gridDatasheets.style.display = "grid";
      setTimeout(function() {
        gridDatasheets.classList.add("active");
      }, FADE_IN_DATASHEETS_GRID);
      fromExplodeAssemble = false;
      ctrlBtnWrapper.classList.remove("active");
    }
  });
  gridDatasheets.addEventListener("click", function(e) {
    const clicked = e.target.closest(".datasheet-card-wrapper");
    let datasheetIndex;
    if (!clicked) return;
    allVidsDatasheets.forEach(function(el) {
      el.currentTime = 0;
    });
    allVidsDatasheetsMobileP.forEach(function(el) {
      el.currentTime = 0;
    });
    gridDatasheets.querySelectorAll(".datasheet-card-wrapper").forEach(function(el, index) {
      if (el.classList[1] === clicked.classList[1]) {
        datasheetIndex = index;
      }
    });
    ActivateFullWrapperDatasheets(datasheetIndex);
  });
  allVidsDatasheets.forEach(function(el) {
    el.addEventListener("ended", function() {
      SetAllDatasheets(true);
      ActivateButtonsDatasheets();
      ctrlBtnWrapper.classList.add("active");
    });
  });
  allButtonsTextImage.forEach(function(el) {
    el.addEventListener("click", function() {
      el.querySelector(".text-image-btn-text").innerHTML = imageTextFlag;
      imageTextFlag === "text" ? imageTextFlag = "image" : imageTextFlag = "text";
      el.parentElement.parentElement.querySelectorAll(".datasheet-subheading").forEach((el2) => el2.classList.toggle("active"));
      el.parentElement.parentElement.querySelectorAll(".datasheet-text").forEach((el3) => el3.classList.toggle("active"));
      imageTextFlag === "image" ? el.parentElement.parentElement.parentElement.querySelector(".dimmer").classList.remove("on") : el.parentElement.parentElement.parentElement.querySelector(".dimmer").classList.add("on");
    });
  });
  var ActivateButtonsDatasheets = function() {
    allButtonsComponents.forEach(function(el) {
      el.classList.remove("active");
    });
    allButtonsDatasheets.forEach(function(el) {
      el.classList.add("active");
    });
    if (!fromExplodeAssemble) buttonDatasheetsBack.classList.remove("active");
  };
  var ReturnToComponentsSection = function() {
    navLinkDatasheets.classList.remove("current");
    navLinkComponents.classList.add("current");
    sectionDatasheets.classList.remove("active");
    document.querySelector(".datasheets-btn.datasheets").click();
    FlashBlackout(FLASH_BLACKOUT);
    ActivateSection("components");
  };
  var SetAllDatasheets = function(turnOn) {
    allFullWrappersDatasheets.forEach(function(el) {
      el.querySelector(".dimmer").classList.toggle("on", turnOn);
      el.querySelectorAll(".img").forEach(function(el2) {
        el2.classList.toggle("active", turnOn);
      });
      el.querySelector(".text-wrapper").classList.toggle("active", turnOn);
    });
  };
  var ActivateFullWrapperDatasheets = function(value) {
    ctrlBtnWrapper.classList.remove("active");
    gridDatasheets.classList.remove("active");
    gridDatasheets.style.display = "none";
    if (!fromExplodeAssemble) FlashBlackout();
    allFullWrappersDatasheets.forEach(function(el) {
      el.classList.remove("active");
      const activeDatasheet = allFullWrappersDatasheets[value];
      activeDatasheet.classList.add("active");
      setTimeout(function() {
        activeDatasheet.querySelector(".vid.datasheets").play();
        activeDatasheet.querySelector(".vid.datasheets-mobile-p").play();
      }, PLAY_DATASHEET_VID_AFTER_DELAY);
    });
    activeFullWrapperDatasheets = allFullWrappersDatasheets[value];
  };
  allClickDivs.forEach(function(el) {
    el.addEventListener("click", function() {
      if (pauseFlag) {
        ActiveFullWrapperInstructions.querySelector(".vid.instructions").play();
        ActiveFullWrapperInstructions.querySelector(
          ".vid.instructions-mobile-p"
        ).play();
        pauseWrapper.classList.remove("active");
        pauseFlag = false;
      } else {
        clearTimeout(instructionVidTimer);
        instructionVidTimer = null;
        ActiveFullWrapperInstructions.querySelector(".vid.instructions").pause();
        ActiveFullWrapperInstructions.querySelector(
          ".vid.instructions-mobile-p"
        ).pause();
        pauseWrapper.classList.add("active");
        pauseFlag = true;
      }
    });
  });
  allVidsInstructions.forEach(function(el) {
    el.addEventListener("ended", function() {
      if (pauseFlag) {
        el.pause();
        el.parentElement.parentElement.parentElement.querySelector(".vid.instructions-mobile-p").pause();
      } else {
        instructionVidTimer = setTimeout(function() {
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
  allButtonsInstructions.forEach(function(el) {
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
    textWrapperInstructions.classList.remove("active");
    pauseFlag = false;
    pauseWrapper.classList.remove("active");
    allFullWrappersInstructions.forEach(function(el) {
      el.classList.remove("active");
    });
    allVidsInstructions.forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    currentVid = Array.from(allButtonsInstructions).indexOf(clicked) + 1;
    ActivateFullWrapperInstructionsAndPlayVids(`step-${currentVid}`);
  });
  var ActivateFullWrapperInstructionsAndPlayVids = function(value) {
    allFullWrappersInstructions.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains(value)) {
        el.classList.add("active");
        ActiveFullWrapperInstructions = el;
      }
      activeFullWrapper = DeactivateAllActivateOne(
        allFullWrappersInstructions,
        "active",
        value
      );
      PlaySectionVids(false);
    });
    allButtonsInstructions.forEach(function(el) {
      el.classList.remove("current", "hovered");
      if (el.classList.contains(value)) el.classList.add("current");
    });
  };
  var ResetToInstructionsMainScreen = function() {
    pauseFlag = false;
    pauseWrapper.classList.remove("active");
    sectionInstructions.classList.add("active");
    textWrapperInstructions.classList.add("active");
    allButtonsInstructions.forEach(function(el) {
      el.classList.remove("current");
    });
    allFullWrappersInstructions.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains("step-1")) el.classList.add("active");
      el.querySelector(".vid.instructions").currentTime = 0;
      el.querySelector(".vid.instructions-mobile-p").currentTime = 0;
      el.querySelector(".vid.instructions").pause();
      el.querySelector(".vid.instructions-mobile-p").pause();
    });
  };
})();
