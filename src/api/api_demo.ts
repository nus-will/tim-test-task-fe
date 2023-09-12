import Api from "./api";

export const getDemoApi = async () => {
  const base_url = 'http://localhost:8989/contractors?_sort=day_rate&_order=desc&q=medical'
  try {
    // const response = await Api.get(base_url);
    const response = {
      "data": {
        "contractors": [
          {
            "full_name": "Bardi",
            "day_rate": 100,
            "available": true,
            "specialities": [
              {
                "name": "Technology"
              },
              {
                "name": "Home Living"
              },
              {
                "name": "Automotive"
              },
              {
                "name": "IoT"
              },
              {
                "name": "Playground"
              },
              {
                "name": "Electric"
              }
            ]
          },
          {
            "full_name": "Tyga",
            "day_rate": 199,
            "available": false,
            "specialities": [
              {
                "name": "Surgery"
              },
              {
                "name": "Medical"
              }
            ]
          },
          {
            "full_name": "Yolo.corp",
            "day_rate": 200,
            "available": true,
            "specialities": [
              {
                "name": "Automotive"
              },
              {
                "name": "Modification"
              }
            ]
          },
          {
            "full_name": "Rossonerri",
            "day_rate": 250,
            "available": false,
            "specialities": [
              {
                "name": "Healthcare"
              },
              {
                "name": "Fitness"
              }
            ]
          },
          {
            "full_name": "Strykes",
            "day_rate": 300,
            "available": true,
            "specialities": [
              {
                "name": "Surgery"
              },
              {
                "name": "Medical"
              }
            ]
          }
        ]
      }
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
