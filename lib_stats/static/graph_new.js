//Width and height
var svgW = 500;
var svgH = 1500;
var barPadding = 1;

var margin = {top: 20, right: 20, bottom: 30, left: 40};
var svg = d3.select(".graph1").append("svg")
	.attr("width", svgW)
	.attr("height", svgH);

//var data = [{"library_name": "distribute", "repo_count": 18103, "repo_system": "github", "followers": 85747}, {"library_name": "enable", "repo_count": 14715, "repo_system": "github", "followers": 76369}, {"library_name": "Sphinx", "repo_count": 5935, "repo_system": "github", "followers": 26491}, {"library_name": "cloud", "repo_count": 5217, "repo_system": "github", "followers": 20240}, {"library_name": "numpy", "repo_count": 4453, "repo_system": "github", "followers": 16729}, {"library_name": "tornado", "repo_count": 3776, "repo_system": "github", "followers": 23132}, {"library_name": "coverage", "repo_count": 3458, "repo_system": "github", "followers": 20114}, {"library_name": "nose", "repo_count": 3415, "repo_system": "github", "followers": 18998}, {"library_name": "Twisted", "repo_count": 3216, "repo_system": "github", "followers": 13431}, {"library_name": "Jinja2", "repo_count": 3161, "repo_system": "github", "followers": 18052}, {"library_name": "PIL", "repo_count": 3115, "repo_system": "github", "followers": 13642}, {"library_name": "curl", "repo_count": 3046, "repo_system": "github", "followers": 19260}, {"library_name": "SQLAlchemy", "repo_count": 2618, "repo_system": "github", "followers": 11075}, {"library_name": "lxml", "repo_count": 2570, "repo_system": "github", "followers": 11021}, {"library_name": "scipy", "repo_count": 2219, "repo_system": "github", "followers": 8491}, {"library_name": "ipython", "repo_count": 2154, "repo_system": "github", "followers": 8954}, {"library_name": "matplotlib", "repo_count": 2094, "repo_system": "github", "followers": 6733}, {"library_name": "Qt", "repo_count": 1567, "repo_system": "github", "followers": 5088}, {"library_name": "Pygments", "repo_count": 1536, "repo_system": "github", "followers": 9380}, {"library_name": "pep8", "repo_count": 1317, "repo_system": "github", "followers": 7056}, {"library_name": "docutils", "repo_count": 1239, "repo_system": "github", "followers": 4323}, {"library_name": "Cython", "repo_count": 1228, "repo_system": "github", "followers": 6340}, {"library_name": "PyYAML", "repo_count": 1196, "repo_system": "github", "followers": 6606}, {"library_name": "wxPython", "repo_count": 1188, "repo_system": "github", "followers": 2913}, {"library_name": "pytz", "repo_count": 979, "repo_system": "github", "followers": 4829}, {"library_name": "configobj", "repo_count": 888, "repo_system": "github", "followers": 3425}, {"library_name": "idle", "repo_count": 710, "repo_system": "github", "followers": 2751}, {"library_name": "pycrypto", "repo_count": 702, "repo_system": "github", "followers": 3002}, {"library_name": "paramiko", "repo_count": 668, "repo_system": "github", "followers": 2296}, {"library_name": "zlib", "repo_count": 637, "repo_system": "github", "followers": 3982}, {"library_name": "pyflakes", "repo_count": 628, "repo_system": "github", "followers": 4105}, {"library_name": "libxml2", "repo_count": 610, "repo_system": "github", "followers": 2425}, {"library_name": "feedparser", "repo_count": 588, "repo_system": "github", "followers": 2054}, {"library_name": "epydoc", "repo_count": 582, "repo_system": "github", "followers": 1927}, {"library_name": "mingw", "repo_count": 581, "repo_system": "github", "followers": 3058}, {"library_name": "pandas", "repo_count": 563, "repo_system": "github", "followers": 2784}, {"library_name": "pyOpenSSL", "repo_count": 556, "repo_system": "github", "followers": 3544}, {"library_name": "hdf5", "repo_count": 542, "repo_system": "github", "followers": 2523}, {"library_name": "pyserial", "repo_count": 524, "repo_system": "github", "followers": 1487}, {"library_name": "Reportlab", "repo_count": 522, "repo_system": "github", "followers": 1810}, {"library_name": "html5lib", "repo_count": 513, "repo_system": "github", "followers": 2830}, {"library_name": "pywin32", "repo_count": 496, "repo_system": "github", "followers": 1851}, {"library_name": "sympy", "repo_count": 440, "repo_system": "github", "followers": 1162}, {"library_name": "PySide", "repo_count": 433, "repo_system": "github", "followers": 1687}, {"library_name": "pyglet", "repo_count": 417, "repo_system": "github", "followers": 968}, {"library_name": "pyzmq", "repo_count": 389, "repo_system": "github", "followers": 2737}, {"library_name": "swig", "repo_count": 376, "repo_system": "github", "followers": 1745}, {"library_name": "pytables", "repo_count": 367, "repo_system": "github", "followers": 2122}, {"library_name": "networkx", "repo_count": 356, "repo_system": "github", "followers": 2427}, {"library_name": "biopython", "repo_count": 349, "repo_system": "github", "followers": 980}, {"library_name": "GDAL", "repo_count": 313, "repo_system": "github", "followers": 1138}, {"library_name": "traits", "repo_count": 273, "repo_system": "github", "followers": 1630}, {"library_name": "ply", "repo_count": 271, "repo_system": "github", "followers": 1120}, {"library_name": "libxslt", "repo_count": 271, "repo_system": "github", "followers": 845}, {"library_name": "pyparsing", "repo_count": 270, "repo_system": "github", "followers": 1472}, {"library_name": "PyOpenGL", "repo_count": 252, "repo_system": "github", "followers": 898}, {"library_name": "libYAML", "repo_count": 241, "repo_system": "github", "followers": 1154}, {"library_name": "scons", "repo_count": 237, "repo_system": "github", "followers": 675}, {"library_name": "keyring", "repo_count": 229, "repo_system": "github", "followers": 631}, {"library_name": "zope.interface", "repo_count": 228, "repo_system": "github", "followers": 557}, {"library_name": "xlrd", "repo_count": 198, "repo_system": "github", "followers": 1753}, {"library_name": "libpng", "repo_count": 195, "repo_system": "github", "followers": 505}, {"library_name": "libjpeg", "repo_count": 187, "repo_system": "github", "followers": 590}, {"library_name": "pyface", "repo_count": 175, "repo_system": "github", "followers": 901}, {"library_name": "xlwt", "repo_count": 166, "repo_system": "github", "followers": 1797}, {"library_name": "statsmodels", "repo_count": 137, "repo_system": "github", "followers": 558}, {"library_name": "Shapely", "repo_count": 130, "repo_system": "github", "followers": 569}, {"library_name": "pyfits", "repo_count": 116, "repo_system": "github", "followers": 231}, {"library_name": "VTK", "repo_count": 101, "repo_system": "github", "followers": 220}, {"library_name": "pydot", "repo_count": 97, "repo_system": "github", "followers": 573}, {"library_name": "freetype", "repo_count": 93, "repo_system": "github", "followers": 172}, {"library_name": "ets", "repo_count": 89, "repo_system": "github", "followers": 240}, {"library_name": "mayavi", "repo_count": 83, "repo_system": "github", "followers": 234}, {"library_name": "pyproj", "repo_count": 76, "repo_system": "github", "followers": 390}, {"library_name": "libpython", "repo_count": 73, "repo_system": "github", "followers": 240}, {"library_name": "pyaudio", "repo_count": 71, "repo_system": "github", "followers": 93}, {"library_name": "numexpr", "repo_count": 69, "repo_system": "github", "followers": 405}, {"library_name": "chaco", "repo_count": 63, "repo_system": "github", "followers": 246}, {"library_name": "MDP", "repo_count": 59, "repo_system": "github", "followers": 180}, {"library_name": "EPD", "repo_count": 55, "repo_system": "github", "followers": 94}, {"library_name": "h5py", "repo_count": 55, "repo_system": "github", "followers": 137}, {"library_name": "scikits.image", "repo_count": 53, "repo_system": "github", "followers": 191}, {"library_name": "basemap", "repo_count": 48, "repo_system": "github", "followers": 124}, {"library_name": "envisage", "repo_count": 46, "repo_system": "github", "followers": 151}, {"library_name": "encore", "repo_count": 44, "repo_system": "github", "followers": 72}, {"library_name": "openpyxl", "repo_count": 43, "repo_system": "github", "followers": 1291}, {"library_name": "bitarray", "repo_count": 42, "repo_system": "github", "followers": 117}, {"library_name": "blist", "repo_count": 39, "repo_system": "github", "followers": 267}, {"library_name": "SimPy", "repo_count": 37, "repo_system": "github", "followers": 72}, {"library_name": "grin", "repo_count": 36, "repo_system": "github", "followers": 50}, {"library_name": "jsonpickle", "repo_count": 34, "repo_system": "github", "followers": 190}, {"library_name": "libgdal", "repo_count": 34, "repo_system": "github", "followers": 152}, {"library_name": "enstaller", "repo_count": 34, "repo_system": "github", "followers": 109}, {"library_name": "traitsui", "repo_count": 28, "repo_system": "github", "followers": 57}, {"library_name": "scikits.timeseries", "repo_count": 28, "repo_system": "github", "followers": 99}, {"library_name": "enaml", "repo_count": 25, "repo_system": "github", "followers": 92}, {"library_name": "casuarius", "repo_count": 21, "repo_system": "github", "followers": 94}, {"library_name": "MKL", "repo_count": 20, "repo_system": "github", "followers": 44}, {"library_name": "netCDF4", "repo_count": 18, "repo_system": "github", "followers": 36}, {"library_name": "foolscap", "repo_count": 16, "repo_system": "github", "followers": 45}, {"library_name": "apptools", "repo_count": 15, "repo_system": "github", "followers": 27}, {"library_name": "fwrap", "repo_count": 14, "repo_system": "github", "followers": 43}]
var data;
d3.csv("libdata_2012-12-02.csv", function(csv) {
	// sort
	csv.sort(function(a,b) { return b.repo_count-a.repo_count;});
	
	var data = d3.nest()
		.key(function(d) {return d.repo_count;})
		.sortKeys(d3.ascending)
		.entries(csv);
		
scale = (svgW - 150) / data[0].followers
	
// Nodes
var node = svg.selectAll(".node").data(data)
	.enter().append("g")
	.attr("class", "node");

// Lib names with links
node.append("a")
	.attr("height", 10)
	.attr("class", "target-lib")
	.attr("xlink:href", function (d) { return d.library_name; } )
	.append("text").text(function(d) { return d.library_name; } )
	.attr("x", 10)
	.attr("y", function(d, i) {return i * 20 + 10});
	
// Bar graph 
node.append("rect")
	.attr("height", 10)
	.attr("x", 150)
	.attr("y", function(d, i) {return i * 20 + 5})
	.attr("width", function(d) {
		//return Math.log(d.repo_count+1)*50}
		return d.repo_count / 100 }
		)
	.sort(
	.attr("opacity", 0.5)
	.attr("fill", "blue");

/*Legend
var legend_info = [
		{"item": "Repo Count", "color" : "blue",
			"desc": "(Number of repos using the lib)"},
		{"item" : "Follower Count", "color" : "red",
			"desc": "(Followers of any repo using the lib)"}];

var legend = svg.selectAll(".legend")
	.data(legend_info).enter()
	.append("g")
	.attr("class", "legend")
	.attr("tranform", function(d, i) {"translate(50," + i * 10 + ")";});

legend.append("rect")
	.attr("width", 60)
	.attr("height", 15)
	.attr("x", svgW - 100)
	.attr("y", function(d,i) {return i * 60 + 90})
	.attr("fill",  function (d) {return d.color});
	
legend.append("text")
	.attr("x", svgW - 110)
	.attr("y", function(d,i) {return i * 60 + 97})
	.attr("dy", ".35em")
	.style("text-anchor", "end")
	.text(function(d) { return d.item })

legend.append("text")
	.attr("x", svgW - 110)
	.attr("y", function(d,i) {return i * 60 + 117})
	.attr("dy", ".35em")
	.style("text-anchor", "end")
	.text(function(d) { return d.desc })
*/