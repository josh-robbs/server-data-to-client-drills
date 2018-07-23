const express = require("express");
const cors = require("cors");
const data = require("./api/cohorts");
const port = parseInt(process.env.PORT || 8080);

const app = express();

app.use(cors());

function getCohortById(data,id) {
  for(let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
  }
  return null;
}

app.get('/', function(request,response) {
  response.json({
    data
  });
});

app.get('/:id', function(request, response){
  var cohort = getCohortById(data, request.params.id);
  if(!cohort) {
    response.status(404).json({
      error: {
        message: 'No cohort found!'
      }
    });
  } else {
    response.json({
      data: cohort
    });
  }
});

app.listen(port, () => console.log('Local host 8080'));