// Mod 12.4.3 Belly Button Demographics Panel

function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  // create a function of option changed which is called in the index.html
  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  
    console.log(newSample);
  }
  
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
      console.log(result)

      PANEL.html("");
      Object.entries(result).forEach(([key, value]) => {
      // {console.log(key + ': ' + value);});
      // PANEL.append("h6").text(result.(+key +":- " "+value+"));
        // PANEL.append("h6").text('${key()}: ${value}');
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
        // append("<span>"+key +":- "+value+"</span>")
    });
  }
  