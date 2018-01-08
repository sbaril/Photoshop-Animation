/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
	var ExtensionId = "com.sbaril.animcouleur2";
    
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
// ANIMCOULEUR2 BUTTONS FUNCTIONS
////////////////////////////////////////////////////////////////////////////////   
            
        $("#btn_debug").click(showDevTools);
        $("#btn_reload").click(reloadPanel);
        
        $("#btn_test").click(function () {
            csInterface.evalScript('sayHello()');
        });
        
        
        $("#btn_newEmptyVideo").click(function () {
            loadJSXFile("/jsx/AnimC2_emptyVideoLayer.jsx");
        });
        
        $("#btn_infos").click(function () {
            loadJSXFile("/jsx/AnimC2_Infos.jsx");
        });
        
        $("#btn_brushToolClose").click(function () {
            loadJSXFile("/jsx/AnimC2_brushOnePx.jsx");
        });
        
        $("#btn_brushToolClose").click(function () {
            loadJSXFile("/jsx/AnimC2_brushOnePx.jsx");
        });
        
        $("#btn_magicWandTool").click(function () {
            loadJSXFile("/jsx/AnimC2_magicWandToolAll.jsx");
        });
        
        $("#btn_colorPicker").click(function () {
            loadJSXFile("/jsx/AnimC2_colorPicker.jsx");
        });
        
        $("#btn_expandSelectionOne").click(function () {
            loadJSXFile("/jsx/AnimC2_expandSelectOnePx.jsx");
        });
                
        $("#btn_contractSelectionOne").click(function () {
            loadJSXFile("/jsx/AnimC2_contractSelectOnePx.jsx");
        });
                
        $("#btn_fillSelection").click(function () {
            loadJSXFile("/jsx/AnimC2_fillFgColor.jsx");
        });
        
        $("#btn_deselect").click(function () {
            loadJSXFile("/jsx/AnimC2_deselect.jsx");
        });
        
        $("#btn_expandFillOne").click(function () {
            loadJSXFile("/jsx/AnimC2_fillExpandOnePx.jsx");
        });
        
        $("#btn_expandFillTwo").click(function () {
            loadJSXFile("/jsx/AnimC2_fillExpandTwoPx.jsx");
        });
        
        $("#btn_lassoTool").click(function () {
            loadJSXFile("/jsx/AnimC2_lassoTool.jsx");
        });
        
        $("#btn_paintBucketToolAll").click(function () {
            loadJSXFile("/jsx/AnimC2_paintBucketAll.jsx");
        });
        
        $("#btn_brushTool").click(function () {
            loadJSXFile("/jsx/AnimC2_brushTool.jsx");
        });
        
        $("#btn_mixerBrushTool").click(function () {
            loadJSXFile("/jsx/AnimC2_mixerBrushTool.jsx");
        });
        
        $("#btn_smudgeTool").click(function () {
            loadJSXFile("/jsx/AnimC2_smudgeTool.jsx");
        });
        
        $("#btn_emptyVideoShadows").click(function () {
            loadJSXFile("/jsx/AnimC2_newShadowLayer.jsx");
        });
        
        $("#btn_emptyVideoLights").click(function () {
            loadJSXFile("/jsx/AnimC2_newLightLayer.jsx");
        });
        
        $("#btn_duplicateVideoFrame").click(function () {
            loadJSXFile("/jsx/AnimC2_duplicateVideoFrame.jsx");
        });
        
        $("#btn_deleteVideoFrame").click(function () {
            loadJSXFile("/jsx/AnimC2_deleteVideoFrame.jsx");
        });
        
        $("#btn_duplicateReselectFill").click(function () {
            loadJSXFile("/jsx/AnimC2_duplicateSelect.jsx");
        });
        
        $("#btn_freeTransform").click(function () {
            loadJSXFile("/jsx/AnimC2_freeTransform.jsx");
        });
        
        $("#btn_warp").click(function () {
            loadJSXFile("/jsx/AnimC2_warp.jsx");
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
// ANIMCOULEUR2 FLYOUT MENU
////////////////////////////////////////////////////////////////////////////////
		
		// Ugly workaround to keep track of "checked" and "enabled" statuses
		var checkableMenuItem_isChecked = true;
		var targetMenuItem_isEnabled = true;
				
		// Flyout menu XML string 
		var flyoutXML = '<Menu> \
							<MenuItem Id="AboutItemAnimC2" Label="About AnimCouleur2"/> \
							<MenuItem Id="OpenWebsiteAnimC2" Label="AnimCouleur2 Online Infos"/> \
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
				case "AboutItemAnimC2":
					csInterface.evalScript("alert('AnimCouleur2 \\nVersion 2.2.0\\nPhotoshop CC 2015 to 2017+\\n©2016 Stephane Baril\\nhttp://sbaril.flavors.me');");
					break;
				case "OpenWebsiteAnimC2":
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
    
