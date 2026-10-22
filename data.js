var APP_DATA = {
  "scenes": [
    {
      "id": "0-the-eternia-club-entrance",
      "name": "The ETERNIA Club Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.014087328371003238,
          "pitch": -0.044081880682400154,
          "rotation": 0,
          "target": "1-the-eternia-club-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-the-eternia-club-lobby",
      "name": "The ETERNIA Club Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1560064602581228,
          "pitch": -0.01987600030906478,
          "rotation": 0,
          "target": "3-orion-fitness-center"
        },
        {
          "yaw": -0.013322679869173015,
          "pitch": -0.07314185521904903,
          "rotation": 0,
          "target": "2-pool-area"
        },
        {
          "yaw": 3.1408396890446415,
          "pitch": 0.014643154173471729,
          "rotation": 0,
          "target": "0-the-eternia-club-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pool-area",
      "name": "Pool Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7752858206660562,
          "pitch": -0.010784084705541375,
          "rotation": 0,
          "target": "1-the-eternia-club-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-orion-fitness-center",
      "name": "ORION Fitness Center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5891052127755119,
          "pitch": -0.06280300980104059,
          "rotation": 0,
          "target": "1-the-eternia-club-lobby"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The ETERNIA Club ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
