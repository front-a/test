	
		function SwapHeader_Contacts()
		{
			//alert('Personnel');
			
			var customHeader = "<tr><th class='asset-content' rowspan='2'><div class='asset-content-wrapper'><div class='table-icons-block'>";
			
			customHeader += "<button type='button' id='export_buttons_2' class='icon' onclick=\"toggleActiveById('export_buttons_2')\">";
			customHeader += "<img src=\"./icons/download.svg\" ><img class=\"icon-active\" src=\"./icons/download-active.svg\" ></button>";
			
			customHeader += "<button type=\"button\" id=\"sort_table_list\" class=\"icon\" onclick=\"toggleActiveById('sort_table_list')\">";
			customHeader += "<img src=\"./icons/sort.svg\" ><img class=\"icon-active\" src=\"./icons/sort-active.svg\" ></button>";
			
			customHeader += "<button type=\"button\" id=\"imgRemoveBlanks\" class=\"icon\" onclick=\"toggleActiveById('imgRemoveBlanks')\">";
			customHeader += "<img src=\"./icons/eye.svg\" alt=\"\"><img class=\"icon-active\" src=\"./icons/eye-active.svg\" alt=\"\"></button>";
			
			customHeader += "</div>";
			
			//customHeader += "<s cript>document.dispatchEvent(selectorEvent);</s cript>";
			
			customHeader += "<div class=\"asset\">Asset</div>";
			customHeader += "</div>";

			customHeader += "</th>";
			customHeader += "<th colspan=\"4\">Key Personnel</th><th colspan=\"2\">Office</th>";
			customHeader += "<th class=\"gray-bg rotated bottom-shadow\" rowspan=\"2\"><span>Camp</span></th>";
			customHeader += "<th class=\"gray-bg rotated bottom-shadow\" rowspan=\"2\"><span>Contractors</span></th>";
			customHeader += "<th class=\"gray-bg rotated bottom-shadow\" rowspan=\"2\"><span>Employees</span></th>";
			customHeader += "<th class=\"gray-bg rotated bottom-shadow\" rowspan=\"2\"><span>Workforce</span></th>";
			
			customHeader += "</tr>";
			
			customHeader += "<tr>";
			customHeader += "<th class=\"primary-bg\"><span class=\"linkedin-icon\"><img src=\"./icons/linkedin.svg\"></span></th>";
			customHeader += "<th class=\"secondary-bg\">Job Title</th>";
			customHeader += "<th class=\"secondary-bg\">Name</th>";
			customHeader += "<th class=\"secondary-bg\">Ref. Date</th>";
			customHeader += "<th class=\"primary-bg\">Phone</th>";
			customHeader += "<th class=\"primary-bg\">Mail</th></tr>";
			
			$("[id$=GridViewSample] thead").eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader -- 
			$("[id$=GridViewSample] thead").addClass('large-height');
			
			//document.dispatchEvent(selectorEvent);
			//document.dispatchEvent(tooltipEvent);
			document.dispatchEvent(tooltipTableEvent);

			//loadFlag_Contacts = 1;
		};
		
		function SwapHeader_Production()
		{
			var customHeader = "<tr><th class='asset-content' rowspan='2'><div class='asset-content-wrapper'><div class='table-icons-block'>";
			
			customHeader += "<button type='button' id='export_buttons_2' class='icon' onclick=\"toggleActiveById('export_buttons_2')\">";
			customHeader += "<img src=\"./icons/download.svg\" ><img class=\"icon-active\" src=\"./icons/download-active.svg\" ></button>";
			
			customHeader += "<button type=\"button\" id=\"sort_table_list\" class=\"icon\" onclick=\"toggleActiveById('sort_table_list')\">";
			customHeader += "<img src=\"./icons/sort.svg\" ><img class=\"icon-active\" src=\"./icons/sort-active.svg\" ></button>";
			
			customHeader += "<button type=\"button\" id=\"imgRemoveBlanks\" class=\"icon\" onclick=\"toggleActiveById('imgRemoveBlanks')\">";
			customHeader += "<img src=\"./icons/eye.svg\" alt=\"\"><img class=\"icon-active\" src=\"./icons/eye-active.svg\" alt=\"\"></button>";
			
			customHeader += "</div>";
		
			customHeader += "<div class=\"asset\">Asset</div>";
			customHeader += "</div>";
			customHeader += "</th>";
			
			customHeader += "<th rowspan=\"2\" class=\"gray-bg rotated bottom-shadow\">Commodity</th>";
			customHeader += "<th rowspan=\"2\" class=\"gray-bg rotated bottom-shadow\">Product</th>";
			customHeader += "<th rowspan=\"2\" class=\"gray-bg rotated bottom-shadow\">Unit</th>";			
			
			customHeader += "<th colspan=\"8\">Annual Production: Mines</th>";
			customHeader += "<th colspan=\"2\">Production: Projects</th>";
			
			customHeader += "</tr>";
			
			customHeader += "<tr>";
			customHeader += "<th class=\"secondary-bg\">2023</th>";
			customHeader += "<th class=\"secondary-bg\">2022</th>";
			customHeader += "<th class=\"secondary-bg\">2021</th>";
			customHeader += "<th class=\"secondary-bg\">2020</th>";
			customHeader += "<th class=\"secondary-bg\">2019</th>";
			customHeader += "<th class=\"secondary-bg\">2018</th>";
			customHeader += "<th class=\"secondary-bg\">2017</th>";
			customHeader += "<th class=\"secondary-bg\">2016</th>";

			customHeader += "<th class=\"primary-bg\">Annual</th>";
			customHeader += "<th class=\"primary-bg\">LOM</th></tr>";
			
			$("[id$=GridViewSample] thead").eq(0).html(customHeader); // -- replace Dummy <thead> innerHTML with customHeader -- 
			$("[id$=GridViewSample] thead").addClass('large-height');
			
			//document.dispatchEvent(selectorEvent);
			//document.dispatchEvent(tooltipEvent);
			document.dispatchEvent(tooltipTableEvent);


		};		