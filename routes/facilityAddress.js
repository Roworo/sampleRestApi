var express = require('express');
var router = express.Router();

/* GET a facility address page. */
// router.get('/', function(req, res, next) {
//   res.send('Hello world');
// });

router.get('/', function(req, res, next) {
  res.json({
    "error": {
      "code": 0
    },
    "response": [
      {
        name: "Facility Address 1",
        id: "000-000-123",
        contact_information: {
          name: "John Doe",
          position: "Manager",
          phone_number: "000-000-000",
          start_working_hours: "7:00",
          end_working_hours: "5:00",
          time_zone: "(MST)"
        },
        appointment_schedule_method: {
          pick_up: {
            email: "john.doe@company.com",
            name: "John Doe"
          },
          delivery: {
            email: "john.doe@company.com",
            name: "John Doe"
          } 
        },
        loading_unloading_types: {
          pick_up: {
            live: true,
            drop: true
          },
          delivery: {
            live: true,
            drop: true
          }
        }
      }
    ]
  });
});

module.exports = router;
