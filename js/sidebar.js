
var newHTMLsidebar =`<ul>
							<li>
								<h1>FEATURED POSTS</h1>
								<a href="blog-ecd-e-tool4-tutorial.html">
									<img src="blog-images/ecd4/1.jpg" alt="" height = "200px" >
								</a>

								<h4 style="color:#656565; font-family:arial;"> 
									<marquee direction = 'left'> 
										Join our Facebook Group Early Chilhood Development Checkist For Kindergarten Teachers
									</marquee>
								</h4>
								<h2> ECD E-Tool 4 Tutorial </h2>

								<span>FEBRUARY 6, 2020</span>

							</li>
							<li>
								<h1>RECENT POSTS</h1>
								<ul>
									<li>     
										<a href="blog-ecd-technical-and-administration-manual.html"> 
											<img src="blog-images/technical-manual/header-img.png" alt="" height = "50px">
										</a>
										<h2>Phil ECCD Techninal and Manual</h2>
										<span>FEBRUARY 3, 2020</span>
									</li>
									<li>
										<a href="blog-reset-epson-l-series-tutorial.html"><img src="blog-images/reset-epson/3.jpg" alt="" height = "50px"></a>
										<h2>How to Reset Epson Printer</h2>
										<span>May 11, 2020</span>
									</li>
								</ul>
							</li>
						</ul>
						`

var newPrimaryMenuItems = `
							<li>
								<a href="project-ecd-e-tool4.html">ECD E-Tool 4</a>
							</li>
							<li>
								<a href="project-ecd-e-tool3.html">ECD E-Tool Version 3</a>
							</li>
							<li>
								<a href="project-ecd-e-tool3-crs.html">ECD Consolidation and Reporting System (ECD CRS)</a>
							</li>
						`
var newSecondaryMenuItems = `
							<li>
								<a class="submenu" href="blog-ecd-e-tool4-tutorial.html">Use E-Tool 4 Tutorial</a>
							</li>
							<li>
								<a class="submenu" href="blog-ecd-e-tool3-tutorial.html">Use E-Tool 3 Tutorial</a>
							</li>
							
							<li>
								<a class="submenu" href="blog-reset-epson-l-series-tutorial.html">How To Reset Epson Printers</a>
							</li>
							<li>
								<a class="submenu" href="blog-ecd-technical-and-administration-manual.html">Revised Philippine ECD 
											Checklist(Manual For Teachers)</a>
							</li>
						`

function myFunction() {
  var sidebar = document.getElementsByClassName("sidebar");
  sidebar[0].innerHTML = newHTMLsidebar;

  var primary = document.getElementsByClassName("primary");
  primary[0].innerHTML = newPrimaryMenuItems;

  var sidebar = document.getElementsByClassName("secondary");
  secondary[0].innerHTML = newSecondaryMenuItems;




}
myFunction();







