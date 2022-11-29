const pokemon = [
{
	"name": "Squirtle",
	"type": "Water",
	"picture": "https://64.media.tumblr.com/tumblr_ma4ft6OXxw1rfjowdo1_500.gif",
	"strength": 20,
	"stamina": 18,
	"speed": 45,
	"level": 10,
	"id": 0
},
{
	"name": "Charmander",
	"type": "Fire",
	"picture": "https://66.media.tumblr.com/tumblr_ma0tijLFPg1rfjowdo1_500.gif",
	"strength": 34,
	"stamina": 23,
	"speed": 32,
	"level": 8,
	"id": 1
},
{
	"name": "Psyduck",
	"type": "Water",
	"picture": "https://i.gifer.com/origin/d8/d80f886437ed5e505648c5c36ce17fcc_w200.gif",
	"strength": 20,
	"stamina": 40,
	"speed": 8,
	"level": 23,
	"id": 2
},
{
	"name": "Magikarp",
	"type": "Water",
	"picture": "http://25.media.tumblr.com/144d30a86c175d0d4843b26669913b30/tumblr_msu2d6x4WM1scncwdo1_500.gif",
	"strength": 100,
	"stamina": 100,
	"speed": 100,
	"level": 1,
	"id": 3
},
{
	"name": "Geodude",
	"type": "Rock",
	"picture": "https://64.media.tumblr.com/635e4838f76ed53872041e564facd374/tumblr_n25s0fnPfz1s3bc1no1_500.gifv",
	"strength": 50,
	"stamina": 2,
	"speed": 5,
	"level": 31,
	"id": 4
},
{
	"name": "Diglett",
	"type": "Rock",
	"picture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e798a831-41c5-424a-944f-2ca60d773635/d55gj4v-9c8a58a0-9b70-4ff6-a08b-f7e7b150f025.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3OThhODMxLTQxYzUtNDI0YS05NDRmLTJjYTYwZDc3MzYzNVwvZDU1Z2o0di05YzhhNThhMC05YjcwLTRmZjYtYTA4Yi1mN2U3YjE1MGYwMjUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hrurKtaQ0n10Rtw0RKBPsA89NX27yZ2-nNDAKestO3k",
	"strength": 25,
	"stamina": 20,
	"speed": 60,
	"level": 16,
	"id": 5
},
{
	"name": "Farfetch'd",
	"type": "Flying",
	"picture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/de1617e3-c614-4cc4-99e2-27f0a53f34bf/d2x79tt-152f2d2a-cff2-43a8-a187-6f432343a593.gif",
	"strength": 18,
	"stamina": 60,
	"speed": 75,
	"level": 47,
	"id": 6
},
{
	"name": "Snorlax",
	"type": "Sleeping",
	"picture": "https://i.pinimg.com/originals/83/0b/53/830b53f8bbd0e9dbcade87da95abdad0.gif",
	"strength": 90,
	"stamina": 1,
	"speed": 1,
	"level": 62,
	"id": 7
},
{
	"name": "Piplup",
	"type": "Water",
	"picture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8250c580-d95a-47b8-b948-923db237fe97/dew872q-fe53b073-f7a4-4955-9f88-86e111f1edcd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyNTBjNTgwLWQ5NWEtNDdiOC1iOTQ4LTkyM2RiMjM3ZmU5N1wvZGV3ODcycS1mZTUzYjA3My1mN2E0LTQ5NTUtOWY4OC04NmUxMTFmMWVkY2QuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r2sbOoa2pymDjollr-KqDCpzE7tuzvc94D0t3Bp9qbo",
	"strength": 12,
	"stamina": 24,
	"speed": 32,
	"level": 13,
	"id": 8
},
{
	"name": "Jigglypuff",
	"type": "Smily",
	"picture": "https://thumbs.gfycat.com/TestyConstantKissingbug-max-1mb.gif",
	"strength": 30,
	"stamina": 60,
	"speed": 50,
	"level": 27,
	"id": 9
},
{
	"name": "Mudkip",
	"type": "Water",
	"picture": "https://thumbs.gfycat.com/MadeupFittingHellbender-max-1mb.gif",
	"strength": 26,
	"stamina": 18,
	"speed": 20,
	"level": 15,
	"id": 10
},
{
	"name": "Turtwig",
	"type": "Grass",
	"picture": "https://thumbs.gfycat.com/SecondaryDishonestHammerheadshark-size_restricted.gif",
	"strength": 32,
	"stamina": 10,
	"speed": 12,
	"level": 8,
	"id": 11
}
]

export default pokemon