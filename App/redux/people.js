
const initialState = {
  user: 35,
  gps: {
    latitude: 29,
    longitude: -90
  },
  location: {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
  },
  adventure: {
    markerLocations: [
      {
        latitude: 0,
        longitude: 0
      }

    ]

  },
  pastAdventures: [
    { cover: 'https://www.orlandoinformer.com/wp-content/uploads/2011/08/port-of-entry-islands-of-adventure-725-oi.jpg', city: 'New Orleans, LA', likes: 35, comments: 100 },
    { cover: 'http://cdn1.theodysseyonline.com/files/2015/11/21/635837430566856627-1324495185_tndkklvnxeoprzcusexl.jpg', city: 'New Orleans, LA', likes: 35, comments: 100 }
  ],
  CurrentStop: {},
  stockPhotos: [
    {
      key: 1, name: 'Aaron', image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/10447708_10105496802291065_3147331436798292945_n.jpg?oh=ff797fce9d955f7447e90ee529022d1c&oe=5A420D4C'
    }, {
      key: 2,
      name: 'Aaron',
      image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/14045538_10107972595032565_3593452153664586935_n.jpg?oh=26a4a7c5994a20fd4925ca44e652e600&oe=5A3CDA8F'
    }, {
      key: 3,
      name: 'Aaron',
      image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/484184_10101925915846125_2117390075_n.jpg?oh=1ac9e874e9aff45162e1bd57260a87cf&oe=5A45C8EC'
    }, {
      key: 4,
      name: 'Aaron',
      image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/296567_10100920967635395_1566287574_n.jpg?oh=3e4662df3e0e036d7e1ebdcc9db45261&oe=5A3BB0FA'
    }, {
      key: 5,
      name: 'Aaron',
      image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/14731191_10108307608712465_7841494444542832586_n.jpg?oh=77c6f8ef56268c76513122da90a08dea&oe=5A3D0BD0'
    }, {
      key: 6,
      name: 'Aaron',
      image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t31.0-8/14615633_10108262526203175_477664095445974644_o.jpg?oh=41cf6b197db119373a5b24857570dff0&oe=5A4351F2'
    }, {
      key: 7,
      name: 'Aaron',
      image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/427047_10101508273454825_674224487_n.jpg?oh=a1dba32d1618546b454ce15a2171398c&oe=5A3D827C'
    }, {
      key: 7,
      name: 'Aaron',
      image: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/1917802_975240228725_1539824_n.jpg?oh=c3aa630e16c3ffa864c81c2cd7ba1e0f&oe=5A73866B'
    },
  ]
}


export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return Object.assign({}, state, {
        user: action.User
      });
    case 'SET_LOCATION':
      return Object.assign({}, state, {
        location: action.loc,
      });
    case 'SET_ADVENTURE':
      return Object.assign({}, state, {
        adventure: action.adv,
      });
    case 'SET_CURRENTSTOP':
      return Object.assign({}, state, {
        CurrentStop: action.stop
      });
    case 'Add_Photos':
      return Object.assign({}, state, {
        photo: action.photo
      });
      case 'SET_GPS':
      return Object.assign({}, state, {
        gps: action.gps
      });
    default:
      return state;

  }
}