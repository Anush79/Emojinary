import React, { useState } from "react";
import "./styles.css";

var objecticons = {
  "๐ช": "Banjo",
  "๐ช": "Diya Lamp",
  "๐ช": "Axe",
  "๐ช": "Razor",
  "๐ช": "Chair",
  "๐ช": "Kite",
  "๐ช": "Yo-Yo",
  "๐ฉบ": "Stethoscope",
  "๐ฉน": "Adhesive Bandage",
  "๐ฉธ": "Drop of Blood",
  "๐งฟ": "Nazar Amulet",
  "๐งพ": "Receipt",
  "๐งฝ": "Sponge",
  "๐งผ": "Soap",
  "๐งป": "Roll of Paper",
  "๐งบ": "Basket",
  "๐งน": "Broom",
  "๐งธ": "Teddy Bear",
  "๐งท": "Safety Pin",
  "๐งถ": "Yarn",
  "๐งต": "Thread",
  "๐งด": "Lotion Bottle",
  "๐งณ": "Luggage",
  "๐งฒ": "Magnet",
  "๐งฑ": "Brick",
  "๐งฐ": "Toolbox",
  "๐งฏ": "Fire Extinguisher",
  "๐งฎ": "Abacus",
  "๐งญ": "Compass",
  "๐งฌ": "DNA",
  "๐งซ": "Petri Dish",
  "๐งช": "Test Tube",
  "๐งจ": "Firecracker",
  "๐งง": "Red Envelope",
  "๐ฆฝ": "Manual Wheelchair",
  "๐ฆผ": "Motorized Wheelchair",
  "๐ฆฏ": "White Cane",
  "๐คฟ": "Diving Mask",
  "๐ข๏ธ": "Oil Drum",
  "๐ก๏ธ": "Shield",
  "๐ ๏ธ": "Hammer and Wrench",
  "๐": "Shopping Cart",
  "๐๏ธ": "Bed",
  "๐๏ธ": "Bellhop Bell",
  "๐๏ธ": "Shopping Bags",
  "๐": "Person in Bed",
  "๐๏ธ": "Couch and Lamp",
  "๐": "Bathtub",
  "๐": "Person Taking Bath",
  "๐ฟ": "Shower",
  "๐ฝ": "Toilet",
  "๐ฐ": "Potable Water",
  "๐ฌ": "Cigarette",
  "๐ช": "Door",
  "๐ฟ": "Moai",
  "๐บ๏ธ": "World Map",
  "๐ณ๏ธ": "Ballot Box with Ballot",
  "๐ก๏ธ": "Dagger",
  "๐๏ธ": "Rolled-Up Newspaper",
  "๐๏ธ": "Old Key",
  "๐๏ธ": "Clamp",
  "๐๏ธ": "Spiral Calendar",
  "๐๏ธ": "Spiral Notepad",
  "๐๏ธ": "Wastebasket",
  "๐๏ธ": "File Cabinet",
  "๐๏ธ": "Card File Box",
  "๐๏ธ": "Card Index Dividers",
  "๐ผ๏ธ": "Framed Picture",
  "๐ฒ๏ธ": "Trackball",
  "๐ฑ๏ธ": "Computer Mouse",
  "๐จ๏ธ": "Printer",
  "๐ฅ๏ธ": "Desktop Computer",
  "๐๏ธ": "Crayon",
  "๐๏ธ": "Paintbrush",
  "๐๏ธ": "Fountain Pen",
  "๐๏ธ": "Pen",
  "๐๏ธ": "Linked Paperclips",
  "๐น๏ธ": "Joystick",
  "๐ณ๏ธ": "Hole",
  "๐ฐ๏ธ": "Mantelpiece Clock",
  "๐ฏ๏ธ": "Candle",
  "๐ฎ": "Crystal Ball",
  "๐ญ": "Telescope",
  "๐ฌ": "Microscope",
  "๐ซ": "Water Pistol",
  "๐ช": "Kitchen Knife",
  "๐ฉ": "Nut and Bolt",
  "๐จ": "Hammer",
  "๐ง": "Wrench",
  "๐ฆ": "Flashlight",
  "๐": "Link",
  "๐": "Bookmark",
  "๐": "Unlocked",
  "๐": "Locked",
  "๐": "Key",
  "๐": "Locked with Key",
  "๐": "Locked with Pen",
  "๐": "Magnifying Glass Tilted Right",
  "๐": "Magnifying Glass Tilted Left",
  "๐": "Electric Plug",
  "๐": "Battery",
  "๐ฟ": "Prayer Beads",
  "๐ฝ๏ธ": "Film Projector",
  "๐ผ": "Videocassette",
  "๐ป": "Radio",
  "๐บ": "Television",
  "๐น": "Video Camera",
  "๐ธ": "Camera with Flash",
  "๐ท": "Camera",
  "๐ฒ": "Mobile Phone with Arrow",
  "๐ฑ": "Mobile Phone",
  "๐ฐ": "Newspaper",
  "๐ฏ": "Postal Horn",
  "๐ฎ": "Postbox",
  "๐ญ": "Open Mailbox with Lowered Flag",
  "๐ฌ": "Open Mailbox with Raised Flag",
  "๐ซ": "Closed Mailbox with Raised Flag",
  "๐ช": "Closed Mailbox with Lowered Flag",
  "๐ฉ": "Envelope with Arrow",
  "๐จ": "Incoming Envelope",
  "๐ง": "E-Mail",
  "๐ฆ": "Package",
  "๐ฅ": "Inbox Tray",
  "๐ค": "Outbox Tray",
  "๐ก": "Satellite Antenna",
  "๐ ": "Fax Machine",
  "๐": "Pager",
  "๐": "Telephone Receiver",
  "๐": "Memo",
  "๐": "Scroll",
  "๐": "Books",
  "๐": "Orange Book",
  "๐": "Blue Book",
  "๐": "Green Book",
  "๐": "Open Book",
  "๐": "Closed Book",
  "๐": "Notebook with Decorative Cover",
  "๐": "Notebook",
  "๐": "Ledger",
  "๐": "Bookmark Tabs",
  "๐": "Triangular Ruler",
  "๐": "Straight Ruler",
  "๐": "Paperclip",
  "๐": "Round Pushpin",
  "๐": "Pushpin",
  "๐": "Clipboard",
  "๐": "Bar Chart",
  "๐": "Chart Decreasing",
  "๐": "Chart Increasing",
  "๐": "Card Index",
  "๐": "Tear-Off Calendar",
  "๐": "Calendar",
  "๐": "Page Facing Up",
  "๐": "Page with Curl",
  "๐": "Open File Folder",
  "๐": "File Folder",
  "๐": "DVD",
  "๐ฟ": "Optical Disk",
  "๐พ": "Floppy Disk",
  "๐ฝ": "Computer Disk",
  "๐ป": "Laptop",
  "๐ธ": "Money with Wings",
  "๐ท": "Pound Banknote",
  "๐ถ": "Euro Banknote",
  "๐ต": "Dollar Banknote",
  "๐ด": "Yen Banknote",
  "๐ณ": "Credit Card",
  "๐ฐ": "Money Bag",
  "๐ฃ": "Bomb",
  "๐ก": "Light Bulb",
  "๐": "Gem Stone",
  "๐": "Love Letter",
  "๐": "Pill",
  "๐": "Syringe",
  "๐": "Barber Pole",
  "๐บ": "Amphora",
  "๐ท๏ธ": "Label",
  "๐ฎ": "Red Paper Lantern",
  "๐ฅ": "Movie Camera",
  "๐๏ธ": "Film Frames",
  "๐๏ธ": "Control Knobs",
  "๐๏ธ": "Level Slider",
  "๐๏ธ": "Studio Microphone",
  "๐": "Wind Chime",
  "๐": "Carp Streamer",
  "๐": "Japanese Dolls",
  "๐": "Confetti Ball",
  "๐": "Party Popper",
  "๐": "Balloon",
  "๐": "Wrapped Gift",
  "๐": "Ribbon",
  "๐ก๏ธ": "Thermometer",
  "โฑ๏ธ": "Umbrella on Ground",
  "โ๏ธ": "Pick",
  "โฑ๏ธ": "Funeral Urn",
  "โ๏ธ": "chain",
  "โฐ๏ธ": "Coffin",
  "โ๏ธ": "Gear",
  "โ๏ธ": "Alembic",
  "โ๏ธ": "Balance Scale",
  "โ๏ธ": "Crossed Swords",
  "โ๏ธ": "Hammer and Pick",
  "โ๏ธ": "Black Nib",
  "โ๏ธ": "Pencil",
  "โ๏ธ": "Envelope",
  "โ๏ธ": "Scissors",
  "โ๏ธ": "Telephone",
  "โจ๏ธ": "Keyboard",
  "โ": "Hourglass Done",
  "โ๐": "Running Shoe",
  "โ๐ฅพ": "Hiking Boot",
  "โ๐ฅฟ": "Flat Shoe",
  "โ๐ ": "High-Heeled Shoe",
  "โ๐ก": "Sandal",
  "โ๐ฉฐ": "Ballet Shoes",
  "โ๐ข": "Boots",
  "โ๐": "Crown",
  "๐": "Hat",
  "โ๐ฉ": "Top Hat",
  "โ๐": "Graduation Cap",
  "โ๐งข": "Billed Cap",
  "โโ": "Rescue Worker Helmet",
  "โ๐": "Ring",
  "โ": "Watch",
  "โฒ๏ธ": "Timer Clock",
  "โฑ๏ธ": "Stopwatch",
  "โณ": "Hourglass Not Done",
  "โฐ": "Alarm Clock",
  "๐": "Glasses",
  "โ๐ถ": "Sunglasses",
  "โ๐ฅฝ": "Goggles",
  "๐ฅผ": "Lab Coat",
  "๐ฅ": "Martial Arts Uniform",
  "โ๐ฆบ": "Safety Vest",
  "โ๐": "Necktie",
  "โ๐": "Tshirt",
  "โ๐": "Jeans",
  "โ๐งฃ": "Scarf",
  "โ๐งค": "Gloves",
  "โ๐งฅ": "Coat",
  "โ๐งฆ": "Socks",
  "โ๐": "Dress",
  "โ๐": "Kimono",
  "โ๐ฅป": "Saree",
  "โ๐ฉฑ": "Swimsuit",
  "โ๐ฉณ": "Shorts",
  "๐": "Shirt",
  "โ๐": "Purse",
  "โ๐": "Handbag",
  "โ๐": "Clutchbag",
  "โ๐": "Shopping Bags",
  "โ๐": "Backpack",
  "โ๐": "Shoe"

};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var myobjects = Object.keys(objecticons);
export default function App() {
  const [meaning, setmeaning] = useState("");
  const [emoji, setemoji] = useState("");

  function inputhandler(event) {
    var userinput = event.target.value;
    var meaning = objecticons[userinput];
    var emoji = userinput;
  
    if (userinput in objecticons) {
      setmeaning(meaning);
      setemoji(emoji);
    } else {
      setmeaning("Oh No! this is not in our Emojinary");
      setemoji(emoji);
    }
  
  }

  function clickhandler(item) {
    var meaning = objecticons[item];
    var emoji = item;
    setmeaning(meaning);
    setemoji(emoji);
    topFunction();
  }

  return (
    <div className="App">
      <h1>Emojinary</h1>
      <h2>Welcome User</h2>
      <p>
         Emojis are AMAZING. Emojis influence our emotions, build better
	 relationships and even help with learning. But many a time we don't
	 know the meaning of a particular emoji in thousands of
	 Emojis. So to help, here are some object emojis to find the meaning. You may
	 enter any object emoji in the input box here or click on any emoji down
	 below to find out the meaning conveniently.
      </p>
      <div>
        <input
          onChange={inputhandler}
          placeholder="Enter any object emoji"
        ></input>
      </div>
      <h2>Meaning</h2>
      <p className="meaning">{meaning} </p>
      <p className="meaning">{emoji}</p>
      <h3>Our Emojis</h3>

      {myobjects.map(function (item) {
        return (
          <li onClick={() => clickhandler(item)} key={item}>
            {item}
          </li>
        );
      })}

      {/* {myobjects.map(function (Emojis) {
        return <span key={myobjects}> {myobjects}</span>;
      })} */}
    </div>
  );
}
