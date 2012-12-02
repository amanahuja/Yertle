//Width and height
var svgW = 500;
var svgH = 1500;

var svg = d3.select(".graph1").append("svg")
	.attr("width", svgW)
	.attr("height", svgH);

var data = [{"library_name": "distribute", "repo_count": 18103}, {"library_name": "enable", "repo_count": 14715}, {"library_name": "Sphinx", "repo_count": 5935}, {"library_name": "cloud", "repo_count": 5217}, {"library_name": "numpy", "repo_count": 4453}, {"library_name": "tornado", "repo_count": 3776}, {"library_name": "coverage", "repo_count": 3458}, {"library_name": "nose", "repo_count": 3415}, {"library_name": "Twisted", "repo_count": 3216}, {"library_name": "Jinja2", "repo_count": 3161}, {"library_name": "PIL", "repo_count": 3115}, {"library_name": "curl", "repo_count": 3046}, {"library_name": "SQLAlchemy", "repo_count": 2618}, {"library_name": "lxml", "repo_count": 2570}, {"library_name": "scipy", "repo_count": 2219}, {"library_name": "ipython", "repo_count": 2154}, {"library_name": "matplotlib", "repo_count": 2094}, {"library_name": "Qt", "repo_count": 1567}, {"library_name": "Pygments", "repo_count": 1536}, {"library_name": "pep8", "repo_count": 1317}, {"library_name": "docutils", "repo_count": 1239}, {"library_name": "Cython", "repo_count": 1228}, {"library_name": "PyYAML", "repo_count": 1196}, {"library_name": "wxPython", "repo_count": 1188}, {"library_name": "pytz", "repo_count": 979}, {"library_name": "configobj", "repo_count": 888}, {"library_name": "idle", "repo_count": 710}, {"library_name": "pycrypto", "repo_count": 702}, {"library_name": "paramiko", "repo_count": 668}, {"library_name": "zlib", "repo_count": 637}, {"library_name": "pyflakes", "repo_count": 628}, {"library_name": "libxml2", "repo_count": 610}, {"library_name": "feedparser", "repo_count": 588}, {"library_name": "epydoc", "repo_count": 582}, {"library_name": "mingw", "repo_count": 581}, {"library_name": "pandas", "repo_count": 563}, {"library_name": "pyOpenSSL", "repo_count": 556}, {"library_name": "hdf5", "repo_count": 542}, {"library_name": "pyserial", "repo_count": 524}, {"library_name": "Reportlab", "repo_count": 522}, {"library_name": "html5lib", "repo_count": 513}, {"library_name": "pywin32", "repo_count": 496}, {"library_name": "sympy", "repo_count": 440}, {"library_name": "PySide", "repo_count": 433}, {"library_name": "pyglet", "repo_count": 417}, {"library_name": "pyzmq", "repo_count": 389}, {"library_name": "swig", "repo_count": 376}, {"library_name": "pytables", "repo_count": 367}, {"library_name": "networkx", "repo_count": 356}, {"library_name": "biopython", "repo_count": 349}, {"library_name": "GDAL", "repo_count": 313}, {"library_name": "traits", "repo_count": 273}, {"library_name": "ply", "repo_count": 271}, {"library_name": "libxslt", "repo_count": 271}, {"library_name": "pyparsing", "repo_count": 270}, {"library_name": "PyOpenGL", "repo_count": 252}, {"library_name": "libYAML", "repo_count": 241}, {"library_name": "scons", "repo_count": 237}, {"library_name": "keyring", "repo_count": 229}, {"library_name": "zope.interface", "repo_count": 228}, {"library_name": "xlrd", "repo_count": 198}, {"library_name": "libpng", "repo_count": 195}, {"library_name": "libjpeg", "repo_count": 187}, {"library_name": "pyface", "repo_count": 175}, {"library_name": "xlwt", "repo_count": 166}, {"library_name": "statsmodels", "repo_count": 137}, {"library_name": "Shapely", "repo_count": 130}, {"library_name": "pyfits", "repo_count": 116}, {"library_name": "VTK", "repo_count": 101}, {"library_name": "pydot", "repo_count": 97}, {"library_name": "freetype", "repo_count": 93}, {"library_name": "ets", "repo_count": 89}, {"library_name": "mayavi", "repo_count": 83}, {"library_name": "pyproj", "repo_count": 76}, {"library_name": "libpython", "repo_count": 73}, {"library_name": "pyaudio", "repo_count": 71}, {"library_name": "numexpr", "repo_count": 69}, {"library_name": "chaco", "repo_count": 63}, {"library_name": "MDP", "repo_count": 59}, {"library_name": "EPD", "repo_count": 55}, {"library_name": "h5py", "repo_count": 55}, {"library_name": "scikits.image", "repo_count": 53}, {"library_name": "basemap", "repo_count": 48}, {"library_name": "envisage", "repo_count": 46}, {"library_name": "encore", "repo_count": 44}, {"library_name": "openpyxl", "repo_count": 43}, {"library_name": "bitarray", "repo_count": 42}, {"library_name": "blist", "repo_count": 39}, {"library_name": "SimPy", "repo_count": 37}, {"library_name": "grin", "repo_count": 36}, {"library_name": "jsonpickle", "repo_count": 34}, {"library_name": "libgdal", "repo_count": 34}, {"library_name": "enstaller", "repo_count": 34}, {"library_name": "traitsui", "repo_count": 28}, {"library_name": "scikits.timeseries", "repo_count": 28}, {"library_name": "enaml", "repo_count": 25}, {"library_name": "casuarius", "repo_count": 21}, {"library_name": "MKL", "repo_count": 20}, {"library_name": "netCDF4", "repo_count": 18}, {"library_name": "foolscap", "repo_count": 16}, {"library_name": "apptools", "repo_count": 15}, {"library_name": "fwrap", "repo_count": 14}, {"library_name": "blockcanvas", "repo_count": 9}, {"library_name": "PythonDoc", "repo_count": 7}, {"library_name": "scite", "repo_count": 7}, {"library_name": "Pycluster", "repo_count": 7}, {"library_name": "pygarrayimage", "repo_count": 6}, {"library_name": "scimath", "repo_count": 6}, {"library_name": "codetools", "repo_count": 6}, {"library_name": "etsproxy", "repo_count": 4}, {"library_name": "pyhdf", "repo_count": 3}, {"library_name": "graphcanvas", "repo_count": 2}, {"library_name": "scikit_learn", "repo_count": 2}, {"library_name": "etsdevtools", "repo_count": 2}, {"library_name": "python_dateutil", "repo_count": 0}, {"library_name": "bsdiff4", "repo_count": 0}, {"library_name": "lib_netcdf4", "repo_count": 0}, {"library_name": "appinst", "repo_count": 0}]
scale = (svgW - 100) / data[0].followers
	
// Nodes
var node = svg.selectAll(".node").data(data)
	.enter().append("g")
	.attr("class", "node");

// Lib names with links
node.append("a")
	.attr("height", 18)
	.attr("class", "target-lib")
	.attr("xlink:href", function (d) { return 'https://github.com/search?q=' + d.library_name + '&type=Repositories&l=Python'; } )
	.append("text").text(function(d) { return d.library_name; } )
	.attr("x", 10)
	.attr("y", function(d, i) {return i * 22 + 18});
	
// Bar graph 
var bar = node.append("g");
// - bar title
bar.append("title").text(function (d) {return d.repo_count + " repos use " + d.library_name} );

// - bar rect
bar.append("rect")
	.attr("height", 18)
	.attr("x", 120)
	.attr("y", function(d, i) {return i * 22 + 5})
	.attr("width", function(d) {
		//return Math.log(d.repo_count+1)*50}
		return d.repo_count / 60 }
		)
	.attr("title", "test")
	.attr("opacity", 1)
	.attr("fill", function (d,i) {return "rgb(0, 0, " + (200 + 5 * (i % 10)) + ")";});

