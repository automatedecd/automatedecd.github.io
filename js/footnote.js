					
var newHTMLfootnote = `<div>
					<p>
				      <p>Website Developed and Maintained By DEPED LA CASTELLANA 1 ICT OFFICERS</p>
				      <p>automatedecd.github.io | Powered by Github Pages</p>
				      <p>All Rights Reserved 2020</p>
					
					
					</p>
				</div>
						`

function myFunction() {
  var footnote = document.getElementsByClassName("footnote");
  footnote[0].innerHTML = newHTMLfootnote;

}
myFunction();







