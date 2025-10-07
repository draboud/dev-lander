(() => {
  // script.js
  console.log("ended-timers: Oct 6, 2025 - TEST-1");
  var blackoutFlag = true;
  var FEATURE_MAIN_VID_REPLAY = 5e3;
  var DATASHEET_BUTTON_TIMER = 1500;
  var FADE_IN_COMPONENTS_HEADING = 25;
  var FADE_IN_DATASHEETS_GRID = 200;
  var FLASH_BLACKOUT = 50;
  var FLASH_START_BLACKOUT = 500;
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
  var allButtonsFeatures = document.querySelectorAll(".ctrl-btn.features");
  var allButtonsComponents = document.querySelectorAll(".ctrl-btn.components");
  var allButtonsDatasheets = document.querySelectorAll(".ctrl-btn.datasheets");
  var allButtonsInstructions = document.querySelectorAll(
    ".ctrl-btn.instructions"
  );
  var allCtrlButtons = [
    ...allButtonsFeatures,
    ...allButtonsComponents,
    ...allButtonsDatasheets,
    ...allButtonsInstructions
  ];
  var activeSection;
  var activeSectionName;
  var activeFullWrapper;
  var activeFullWrapperIndex;
  var allFullWrappers;
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
  var activeFullWrapperFeatures;
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
    ".ctrl-btn.components.explode"
  );
  var buttonComponentsAssemble = document.querySelector(
    ".ctrl-btn.components.assemble"
  );
  var fullWrapperExplode = sectionComponents.querySelector(
    ".full-wrapper.explode"
  );
  var activeFullWrapperComponents;
  var componentsType;
  var datasheetButtonTimer;
  var explodeOrAssemble = "explode";
  var compNumberString;
  var compContentActive = false;
  var allFullWrappersDatasheets = document.querySelectorAll(
    ".full-wrapper.datasheet"
  );
  var buttonDatasheetsBack = document.querySelector(
    ".ctrl-btn.datasheets.back"
  );
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
  var datasheetIndex;
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
  var activeFullWrapperInstructions;
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
      el.pause();
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
    allFullWrappers = activeSection2.querySelectorAll(".full-wrapper");
    allFullWrappers.forEach(function(el, index) {
      if (el.classList.contains("active")) {
        activeFullWrapper = el;
        activeFullWrapperIndex = index;
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
        componentsType = "";
        break;
      case "datasheets":
        imageTextFlag = "text";
        allButtonsTextImage.forEach(
          (el) => el.querySelector(".text-image-btn-text").innerHTML = "image"
        );
        allFullWrappers.forEach(function(el) {
          el.querySelector(".dimmer").classList.remove("on");
          el.querySelectorAll(".img").forEach(
            (el2) => el2.classList.remove("active")
          );
        });
        gridDatasheets.style.display = "grid";
        gridDatasheets.classList.add("active");
        fromExplodeAssemble = false;
        break;
      case "instructions":
        pauseFlag = false;
        pauseWrapper.classList.remove("active");
        allClickDivs.forEach(function(el) {
          el.style.pointerEvents = "none";
        });
        break;
    }
  };
  var SetSectionButtons = function(sectionName) {
    ctrlBtnWrapper.querySelectorAll(`.ctrl-btn.${sectionName}`).forEach(function(el) {
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
        allButtonsInstructions.forEach(function(el) {
          el.classList.remove("current");
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
  var DeactivateAllActivateOne = function(deactivate, className, activate) {
    let activatedValue;
    deactivate.forEach(function(el, index) {
      el.classList.remove(className);
      if (el.classList.contains(activate)) {
        el.classList.add(className);
        activatedValue = el;
        activeFullWrapperIndex = index;
      }
    });
    return activatedValue;
  };
  var PlaySectionVids = function(endVidFlag) {
    const allFullWrappers2 = activeSection.querySelectorAll(".full-wrapper");
    if (!endVidFlag) {
      allFullWrappers2[activeFullWrapperIndex].querySelector(`.vid.${activeSectionName}`).play();
      allFullWrappers2[activeFullWrapperIndex].querySelector(`.vid.${activeSectionName}-mobile-p`).play();
    } else {
      allFullWrappers2[activeFullWrapperIndex].querySelector(`.vid.${activeSectionName}-end`).play();
      allFullWrappers2[activeFullWrapperIndex].querySelector(`.vid.${activeSectionName}-end-mobile-p`).play();
    }
  };
  var RewindAndPauseAllSectionVids = function(sectionName) {
    activeSection.querySelectorAll(`.vid.${sectionName}`).forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    activeSection.querySelectorAll(`.vid.${sectionName}-mobile-p`).forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    activeSection.querySelectorAll(`.vid.${sectionName}-end`).forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
    activeSection.querySelectorAll(`.vid.${sectionName}-end-mobile-p`).forEach(function(el) {
      el.currentTime = 0;
      el.pause();
    });
  };
  var EnableDisableNavLinks = function(enable) {
    if (enable) {
      allNavLinks.forEach(function(el) {
        el.style.pointerEvents = "auto";
      });
    } else {
      allNavLinks.forEach(function(el) {
        el.style.pointerEvents = "none";
      });
    }
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
  allVidsFeatures.forEach(function(el) {
    el.addEventListener("ended", function() {
      el.parentElement.parentElement.parentElement.querySelector(".text-wrapper").classList.add("active");
      RevealEndVidWrappers(vidName);
      EnableDisableNavLinks(true);
      PlaySectionVids(true);
    });
  });
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".ctrl-btn.features");
    if (!clicked) return;
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
  var SetActiveVid = function(vidName2) {
    allVidWrappersFeatures.forEach(function(el) {
      el.classList.add("active");
    });
    activeFullWrapperFeatures = DeactivateAllActivateOne(
      allFullWrappersFeatures,
      "active",
      vidName2
    );
    allTextWrappersFeatures.forEach(function(el) {
      el.classList.remove("active");
    });
    if (vidName2 === "main") {
      activeFullWrapperFeatures.querySelector(".text-wrapper").classList.add("active");
      return;
    }
  };
  var RevealEndVidWrappers = function() {
    activeFullWrapperFeatures.querySelectorAll(".video-wrapper").forEach(function(el) {
      el.classList.remove("active");
    });
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
      TriggerDatasheetButtonTimer();
    });
  });
  allTextWrappersComponents.forEach(function(el) {
    el.addEventListener("mouseover", function() {
      clearTimeout(datasheetButtonTimer);
    });
    el.addEventListener("mouseout", function() {
      TriggerDatasheetButtonTimer();
    });
  });
  allVidsComponents.forEach(function(el) {
    el.addEventListener("ended", function() {
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
      allButtonsComponents.forEach(function(el2) {
        el2.classList.remove("active");
        if (el2.classList.contains(componentsType)) {
          el2.classList.add("active");
        }
      });
      ToggleComponentsImage(activeFullWrapperComponents, true);
      compContentActive = true;
      FadeInTextWrapperContent();
      compContentActive = false;
      EnableDisableNavLinks(true);
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
      OpenDatasheet(compNumberString);
    });
  });
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".ctrl-btn.components");
    if (!clicked) return;
    allVidsComponents.forEach(function(el) {
      el.currentTime = 0;
    });
    allVidsComponentsMobileP.forEach(function(el) {
      el.currentTime = 0;
    });
    componentsType = clicked.classList[2];
    componentsType === "explode" ? explodeOrAssemble = "assemble" : explodeOrAssemble = "explode";
    activeFullWrapperComponents.querySelector(".text-wrapper").classList.remove("active");
    ToggleComponentsImage(activeFullWrapperComponents, false);
    ResetTextWrapperContent(false);
    EnableDisableNavLinks(false);
    PlaySectionVids(false);
  });
  var TriggerDatasheetButtonTimer = function() {
    datasheetButtonTimer = setTimeout(function() {
      ResetTextWrapperContent(true);
      compContentActive = false;
    }, DATASHEET_BUTTON_TIMER);
  };
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
    activeSection = sectionDatasheets;
    activeSectionName = "datasheets";
    document.querySelector(`.datasheet-card-wrapper.${value}`).click();
    EnableDisableNavLinks(false);
  };
  gridDatasheets.addEventListener("click", function(e) {
    const clicked = e.target.closest(".datasheet-card-wrapper");
    if (!clicked) return;
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
      if (navLinkDatasheets.style.pointerEvents === "none")
        EnableDisableNavLinks(true);
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
  ctrlBtnWrapper.addEventListener("click", function(e) {
    const clicked = e.target.closest(".ctrl-btn.datasheets");
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
    document.querySelector(".ctrl-btn.datasheets.datasheets-btn").click();
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
  var ActivateFullWrapperDatasheets = function(dataSheetIndex) {
    ctrlBtnWrapper.classList.remove("active");
    gridDatasheets.classList.remove("active");
    gridDatasheets.style.display = "none";
    if (!fromExplodeAssemble) FlashBlackout();
    allFullWrappersDatasheets.forEach(function(el) {
      el.classList.remove("active");
    });
    activeFullWrapperDatasheets = allFullWrappersDatasheets[dataSheetIndex];
    activeFullWrapperDatasheets.classList.add("active");
    activeFullWrapperIndex = dataSheetIndex;
    EnableDisableNavLinks(false);
    setTimeout(function() {
      PlaySectionVids(false);
    }, PLAY_DATASHEET_VID_AFTER_DELAY);
  };
  allClickDivs.forEach(function(el) {
    el.addEventListener("click", function() {
      if (pauseFlag) {
        PlaySectionVids(false);
        pauseWrapper.classList.remove("active");
        pauseFlag = false;
      } else {
        clearTimeout(instructionVidTimer);
        instructionVidTimer = null;
        activeFullWrapperInstructions.querySelector(".vid.instructions").pause();
        activeFullWrapperInstructions.querySelector(".vid.instructions-mobile-p").pause();
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
            ResetToInstructionsMainScreen();
            return;
          }
          ActivateFullWrapperInstructions(`step-${currentVid}`);
          PlaySectionVids(false);
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
    const clicked = e.target.closest(".ctrl-btn.instructions");
    if (!clicked) return;
    clearTimeout(instructionVidTimer);
    instructionVidTimer = null;
    textWrapperInstructions.classList.remove("active");
    pauseFlag = false;
    pauseWrapper.classList.remove("active");
    allClickDivs.forEach(function(el) {
      el.style.pointerEvents = "auto";
    });
    allFullWrappersInstructions.forEach(function(el) {
      el.classList.remove("active");
    });
    currentVid = Array.from(allButtonsInstructions).indexOf(clicked) + 1;
    ActivateFullWrapperInstructions(`step-${currentVid}`);
    RewindAndPauseAllSectionVids("instructions");
    PlaySectionVids(false);
  });
  var ActivateFullWrapperInstructions = function(value) {
    activeFullWrapperInstructions = DeactivateAllActivateOne(
      allFullWrappersInstructions,
      "active",
      value
    );
    allButtonsInstructions.forEach(function(el) {
      el.classList.remove("current", "hovered");
      if (el.classList.contains(value)) el.classList.add("current");
    });
  };
  var ResetToInstructionsMainScreen = function() {
    blackout.classList.remove("off");
    pauseFlag = false;
    pauseWrapper.classList.remove("active");
    textWrapperInstructions.classList.add("active");
    allButtonsInstructions.forEach(function(el) {
      el.classList.remove("current");
    });
    allClickDivs.forEach(function(el) {
      el.style.pointerEvents = "none";
    });
    allFullWrappersInstructions.forEach(function(el) {
      el.classList.remove("active");
      if (el.classList.contains("step-1")) {
        el.querySelector(".vid.instructions").currentTime = 0;
        el.querySelector(".vid.instructions").pause();
        el.classList.add("active");
      }
    });
    blackout.classList.add("off");
  };
})();
