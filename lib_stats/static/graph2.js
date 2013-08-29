d3.json('/get_data_2', function(error, data2){
  if (error) {return console.warn(error)}
  //Width and height
  var svgW = 500;
  var svgH = 1500;

  var svg = d3.select(".graph2").append("svg")
          .attr("width", svgW)
          .attr("height", svgH);

//  var data2 = [{"library_name": "distribute", "followers": 85747}, {"library_name": "enable", "followers": 76369}, {"library_name": "Sphinx", "followers": 26491}, {"library_name": "tornado", "followers": 23132}, {"library_name": "cloud", "followers": 20240}, {"library_name": "coverage", "followers": 20114}, {"library_name": "curl", "followers": 19260}, {"library_name": "nose", "followers": 18998}, {"library_name": "Jinja2", "followers": 18052}, {"library_name": "numpy", "followers": 16729}, {"library_name": "PIL", "followers": 13642}, {"library_name": "Twisted", "followers": 13431}, {"library_name": "SQLAlchemy", "followers": 11075}, {"library_name": "lxml", "followers": 11021}, {"library_name": "Pygments", "followers": 9380}, {"library_name": "ipython", "followers": 8954}, {"library_name": "scipy", "followers": 8491}, {"library_name": "pep8", "followers": 7056}, {"library_name": "matplotlib", "followers": 6733}, {"library_name": "PyYAML", "followers": 6606}, {"library_name": "Cython", "followers": 6340}, {"library_name": "Qt", "followers": 5088}, {"library_name": "pytz", "followers": 4829}, {"library_name": "docutils", "followers": 4323}, {"library_name": "pyflakes", "followers": 4105}, {"library_name": "zlib", "followers": 3982}, {"library_name": "pyOpenSSL", "followers": 3544}, {"library_name": "configobj", "followers": 3425}, {"library_name": "mingw", "followers": 3058}, {"library_name": "pycrypto", "followers": 3002}, {"library_name": "wxPython", "followers": 2913}, {"library_name": "html5lib", "followers": 2830}, {"library_name": "pandas", "followers": 2784}, {"library_name": "idle", "followers": 2751}, {"library_name": "pyzmq", "followers": 2737}, {"library_name": "hdf5", "followers": 2523}, {"library_name": "networkx", "followers": 2427}, {"library_name": "libxml2", "followers": 2425}, {"library_name": "paramiko", "followers": 2296}, {"library_name": "pytables", "followers": 2122}, {"library_name": "feedparser", "followers": 2054}, {"library_name": "epydoc", "followers": 1927}, {"library_name": "pywin32", "followers": 1851}, {"library_name": "Reportlab", "followers": 1810}, {"library_name": "xlwt", "followers": 1797}, {"library_name": "xlrd", "followers": 1753}, {"library_name": "swig", "followers": 1745}, {"library_name": "PySide", "followers": 1687}, {"library_name": "traits", "followers": 1630}, {"library_name": "pyserial", "followers": 1487}, {"library_name": "pyparsing", "followers": 1472}, {"library_name": "openpyxl", "followers": 1291}, {"library_name": "sympy", "followers": 1162}, {"library_name": "libYAML", "followers": 1154}, {"library_name": "GDAL", "followers": 1138}, {"library_name": "ply", "followers": 1120}, {"library_name": "biopython", "followers": 980}, {"library_name": "pyglet", "followers": 968}, {"library_name": "pyface", "followers": 901}, {"library_name": "PyOpenGL", "followers": 898}, {"library_name": "libxslt", "followers": 845}, {"library_name": "scons", "followers": 675}, {"library_name": "keyring", "followers": 631}, {"library_name": "libjpeg", "followers": 590}, {"library_name": "pydot", "followers": 573}, {"library_name": "Shapely", "followers": 569}, {"library_name": "statsmodels", "followers": 558}, {"library_name": "zope.interface", "followers": 557}, {"library_name": "libpng", "followers": 505}, {"library_name": "numexpr", "followers": 405}, {"library_name": "pyproj", "followers": 390}, {"library_name": "blist", "followers": 267}, {"library_name": "chaco", "followers": 246}, {"library_name": "libpython", "followers": 240}, {"library_name": "ets", "followers": 240}, {"library_name": "mayavi", "followers": 234}, {"library_name": "pyfits", "followers": 231}, {"library_name": "VTK", "followers": 220}, {"library_name": "scikits.image", "followers": 191}, {"library_name": "jsonpickle", "followers": 190}, {"library_name": "MDP", "followers": 180}, {"library_name": "freetype", "followers": 172}, {"library_name": "libgdal", "followers": 152}, {"library_name": "envisage", "followers": 151}, {"library_name": "h5py", "followers": 137}, {"library_name": "basemap", "followers": 124}, {"library_name": "bitarray", "followers": 117}, {"library_name": "enstaller", "followers": 109}, {"library_name": "scikits.timeseries", "followers": 99}, {"library_name": "EPD", "followers": 94}, {"library_name": "casuarius", "followers": 94}, {"library_name": "pyaudio", "followers": 93}, {"library_name": "enaml", "followers": 92}, {"library_name": "SimPy", "followers": 72}, {"library_name": "encore", "followers": 72}, {"library_name": "traitsui", "followers": 57}, {"library_name": "grin", "followers": 50}, {"library_name": "foolscap", "followers": 45}, {"library_name": "MKL", "followers": 44}, {"library_name": "fwrap", "followers": 43}, {"library_name": "Pycluster", "followers": 36}, {"library_name": "netCDF4", "followers": 36}, {"library_name": "apptools", "followers": 27}, {"library_name": "blockcanvas", "followers": 24}, {"library_name": "scimath", "followers": 18}, {"library_name": "codetools", "followers": 12}, {"library_name": "PythonDoc", "followers": 10}, {"library_name": "pygarrayimage", "followers": 10}, {"library_name": "graphcanvas", "followers": 9}, {"library_name": "etsdevtools", "followers": 7}, {"library_name": "scite", "followers": 6}, {"library_name": "etsproxy", "followers": 5}, {"library_name": "pyhdf", "followers": 2}, {"library_name": "scikit_learn", "followers": 1}, {"library_name": "python_dateutil", "followers": 0}, {"library_name": "bsdiff4", "followers": 0}, {"library_name": "lib_netcdf4", "followers": 0}, {"library_name": "appinst", "followers": 0}]
  var max_fol = data2[0].followers
  console.log("fol max" + max_fol)
          
  // Nodes
  var node = svg.selectAll(".node").data(data2)
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
  bar.append("title").text(function (d) {return d.followers + " people follow repos using " + d.library_name} );

  // - bar rect
  bar.append("rect")
          .attr("height", 18)
          .attr("x", 150)
          .attr("y", function(d, i) {return i * 22 + 5})
          .attr("width", function(d) {
                  //return Math.log(d.repo_count+1)*50}
                  return d.followers / 300}
                  )
          .attr("opacity", 0.85)
          .attr("fill", function (d,i) {return "rgb(" + (200 + 5 * (i % 10)) + ", 0 ,0)";})
          .on("mouseover", function(){
        d3.select(this).transition().duration(500)
                  .attr("width", function(d) { 
                          return (d.followers + .1*(max_fol - d.followers))/300
                          }) 
          .attr("opacity", 1);
      })
      .on("mouseout", function(){
        d3.select(this).transition().duration(10)
                  .attr("width", function(d) { return (d.followers / 300); } )
          .attr("opacity", .85);
      });
});
