/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
	var ExtensionId = "com.sbaril.animdessin2";
    
    // Opens the chrome developer tools in host app
    function showDevTools() {
        window.__adobe_cep__.showDevTools();
    }
    
    // Reloads extension panel
    function reloadPanel() {
        location.reload();
    }
    
    // Loads / executes a jsx file
    function loadJSXFile(pPath) {
        var scriptPath = csInterface.getSystemPath(SystemPath.EXTENSION) + pPath;
        csInterface.evalScript('evalFile("' + scriptPath + '")');
    }


    function init() {
        themeManager.init();


////////////////////////////////////////////////////////////////////////////////
// ANIMDESSIN2 BUTTONS FUNCTIONS
////////////////////////////////////////////////////////////////////////////////   
            
        $("#btn_debug").click(showDevTools);
        $("#btn_reload").click(reloadPanel);
        
        $("#btn_test").click(function () {
            csInterface.evalScript('sayHello()');
        });
        
        
        $("#btn_newDoc").click(function () {
            loadJSXFile("/jsx/AnimD2_newDoc.jsx");
        });
        
        $("#btn_canvasSize").click(function () {
            loadJSXFile("/jsx/AnimD2_canvasSize.jsx");
        });
        
        $("#btn_save").click(function () {
            loadJSXFile("/jsx/AnimD2_save.jsx");
        });
        
        $("#btn_newFrameOne").click(function () {
            loadJSXFile("/jsx/AnimD2_create1Frame.jsx");
        });
        
        $("#btn_newFrameTwo").click(function () {
            loadJSXFile("/jsx/AnimD2_create2Frames.jsx");
        });
        
        $("#btn_deleteFrame").click(function () {
            loadJSXFile("/jsx/AnimD2_deleteFrame.jsx");
        });
                
        $("#btn_onionSkin").click(function () {
            loadJSXFile("/jsx/AnimD2_onionSkin.jsx");
        });
                
        $("#btn_onionSkinSettings").click(function () {
            loadJSXFile("/jsx/AnimD2_onionSkinSettings.jsx");
        });
        
        $("#btn_duplicateFrame").click(function () {
            loadJSXFile("/jsx/AnimD2_duplicateFrame.jsx");
        });
        
        $("#btn_newVideoGroup").click(function () {
            loadJSXFile("/jsx/AnimD2_newVideoGroup.jsx");
        });
        
        $("#btn_minus").click(function () {
            loadJSXFile("/jsx/AnimD2_frameMinusOne.jsx");
        });
        
        $("#btn_plus").click(function () {
            loadJSXFile("/jsx/AnimD2_framePlusOne.jsx");
        });
        
        $("#btn_red").click(function () {
            loadJSXFile("/jsx/AnimD2_colorRed.jsx");
        });
        
        $("#btn_green").click(function () {
            loadJSXFile("/jsx/AnimD2_colorGreen.jsx");
        });
        
        $("#btn_blue").click(function () {
            loadJSXFile("/jsx/AnimD2_colorBlue.jsx");
        });
        
        $("#btn_none").click(function () {
            loadJSXFile("/jsx/AnimD2_colorNone.jsx");
        });
        
        $("#btn_createInBetween").click(function () {
            loadJSXFile("/jsx/AnimD2_inBetweenCreate.jsx");
        });
        
        $("#btn_inBetweenPrevious").click(function () {
            loadJSXFile("/jsx/AnimD2_inBetweenPrevious.jsx");
        });
        
        $("#btn_inBetweenNext").click(function () {
            loadJSXFile("/jsx/AnimD2_inBetweenNext.jsx");
        });
        
        $("#btn_videoShortcuts").click(function () {
            loadJSXFile("/jsx/AnimD2_videoShortcuts.jsx");
        });
        
        $("#btn_commentEdit").click(function () {
            loadJSXFile("/jsx/AnimD2_commentEdit.jsx");
        });
        
        $("#btn_commentsHtml").click(function () {
            loadJSXFile("/jsx/AnimD2_commentExportHtml.jsx");
        });
        
        $("#btn_commentsText").click(function () {
            loadJSXFile("/jsx/AnimD2_commentExportText.jsx");
        });
        
        $("#btn_playheadStart").click(function () {
            loadJSXFile("/jsx/AnimD2_playheadStart.jsx");
        });
        
        $("#btn_playheadEnd").click(function () {
            loadJSXFile("/jsx/AnimD2_playheadEnd.jsx");
        });
        
        $("#btn_showTimeline").click(function () {
            loadJSXFile("/jsx/AnimD2_showTimeline.jsx");
        });


		/////////////////////////////////////////////////////////////////////////

        // Main Feature Button
        /*
		$("#mainBT").click(function () {
            invokeFeature("Main");
        });
		*/
        
        $("#lassoToolBT").click(function () {
            invokeFeature("Tool-Lasso_Tool");
        });




		
////////////////////////////////////////////////////////////////////////////////
// ANIMDESSIN FLYOUT MENU
////////////////////////////////////////////////////////////////////////////////
		
		// Ugly workaround to keep track of "checked" and "enabled" statuses
		var checkableMenuItem_isChecked = true;
		var targetMenuItem_isEnabled = true;
				
		// Flyout menu XML string 
		var flyoutXML = '<Menu> \
							<MenuItem Id="AboutItemAnimD2" Label="About AnimDessin2"/> \
							<MenuItem Id="OpenWebsiteAnimD2" Label="AnimDessin2 Online Infos"/> \
							\
							<MenuItem Label="---" /> \
							\
						</Menu>';

		// Uses the XML string to build the menu
		csInterface.setPanelFlyoutMenu(flyoutXML);

		// Flyout Menu Click Callback
		function flyoutMenuClickedHandler (event) {

			// the event's "data" attribute is an object, which contains "menuId" and "menuName"
			console.dir(event); 
			switch (event.data.menuId) {	
				case "AboutItemAnimD2":
					csInterface.evalScript("alert('AnimDessin2 \\nVersion 2.2.0\\nPhotoshop CC 2015 to 2017+\\n©2016 Stephane Baril\\nhttp://www.sbaril.me');");
					break;
				case "OpenWebsiteAnimD2":
					csInterface.openURLInDefaultBrowser("http://www.sbaril.me/#photoshop-animation"); LoseFocus();
					break;
				default: 
					console.log(event.data.menuName + " clicked!");
			}
		}

		// Listen for the Flyout menu clicks
		csInterface.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", flyoutMenuClickedHandler);

        
        
    }  
    init();

}());
    
