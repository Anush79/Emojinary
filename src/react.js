import React, { useState } from "react";
import "./styles.css";

var objecticons = {
  "🪕": "Banjo",
  "🪔": "Diya Lamp",
  "🪓": "Axe",
  "🪒": "Razor",
  "🪑": "Chair",
  "🪁": "Kite",
  "🪀": "Yo-Yo",
  "🩺": "Stethoscope",
  "🩹": "Adhesive Bandage",
  "🩸": "Drop of Blood",
  "🧿": "Nazar Amulet",
  "🧾": "Receipt",
  "🧽": "Sponge",
  "🧼": "Soap",
  "🧻": "Roll of Paper",
  "🧺": "Basket",
  "🧹": "Broom",
  "🧸": "Teddy Bear",
  "🧷": "Safety Pin",
  "🧶": "Yarn",
  "🧵": "Thread",
  "🧴": "Lotion Bottle",
  "🧳": "Luggage",
  "🧲": "Magnet",
  "🧱": "Brick",
  "🧰": "Toolbox",
  "🧯": "Fire Extinguisher",
  "🧮": "Abacus",
  "🧭": "Compass",
  "🧬": "DNA",
  "🧫": "Petri Dish",
  "🧪": "Test Tube",
  "🧨": "Firecracker",
  "🧧": "Red Envelope",
  "🦽": "Manual Wheelchair",
  "🦼": "Motorized Wheelchair",
  "🦯": "White Cane",
  "🤿": "Diving Mask",
  "🛢️": "Oil Drum",
  "🛡️": "Shield",
  "🛠️": "Hammer and Wrench",
  "🛒": "Shopping Cart",
  "🛏️": "Bed",
  "🛎️": "Bellhop Bell",
  "🛍️": "Shopping Bags",
  "🛌": "Person in Bed",
  "🛋️": "Couch and Lamp",
  "🛁": "Bathtub",
  "🛀": "Person Taking Bath",
  "🚿": "Shower",
  "🚽": "Toilet",
  "🚰": "Potable Water",
  "🚬": "Cigarette",
  "🚪": "Door",
  "🗿": "Moai",
  "🗺️": "World Map",
  "🗳️": "Ballot Box with Ballot",
  "🗡️": "Dagger",
  "🗞️": "Rolled-Up Newspaper",
  "🗝️": "Old Key",
  "🗜️": "Clamp",
  "🗓️": "Spiral Calendar",
  "🗒️": "Spiral Notepad",
  "🗑️": "Wastebasket",
  "🗄️": "File Cabinet",
  "🗃️": "Card File Box",
  "🗂️": "Card Index Dividers",
  "🖼️": "Framed Picture",
  "🖲️": "Trackball",
  "🖱️": "Computer Mouse",
  "🖨️": "Printer",
  "🖥️": "Desktop Computer",
  "🖍️": "Crayon",
  "🖌️": "Paintbrush",
  "🖋️": "Fountain Pen",
  "🖊️": "Pen",
  "🖇️": "Linked Paperclips",
  "🕹️": "Joystick",
  "🕳️": "Hole",
  "🕰️": "Mantelpiece Clock",
  "🕯️": "Candle",
  "🔮": "Crystal Ball",
  "🔭": "Telescope",
  "🔬": "Microscope",
  "🔫": "Water Pistol",
  "🔪": "Kitchen Knife",
  "🔩": "Nut and Bolt",
  "🔨": "Hammer",
  "🔧": "Wrench",
  "🔦": "Flashlight",
  "🔗": "Link",
  "🔖": "Bookmark",
  "🔓": "Unlocked",
  "🔒": "Locked",
  "🔑": "Key",
  "🔐": "Locked with Key",
  "🔏": "Locked with Pen",
  "🔎": "Magnifying Glass Tilted Right",
  "🔍": "Magnifying Glass Tilted Left",
  "🔌": "Electric Plug",
  "🔋": "Battery",
  "📿": "Prayer Beads",
  "📽️": "Film Projector",
  "📼": "Videocassette",
  "📻": "Radio",
  "📺": "Television",
  "📹": "Video Camera",
  "📸": "Camera with Flash",
  "📷": "Camera",
  "📲": "Mobile Phone with Arrow",
  "📱": "Mobile Phone",
  "📰": "Newspaper",
  "📯": "Postal Horn",
  "📮": "Postbox",
  "📭": "Open Mailbox with Lowered Flag",
  "📬": "Open Mailbox with Raised Flag",
  "📫": "Closed Mailbox with Raised Flag",
  "📪": "Closed Mailbox with Lowered Flag",
  "📩": "Envelope with Arrow",
  "📨": "Incoming Envelope",
  "📧": "E-Mail",
  "📦": "Package",
  "📥": "Inbox Tray",
  "📤": "Outbox Tray",
  "📡": "Satellite Antenna",
  "📠": "Fax Machine",
  "📟": "Pager",
  "📞": "Telephone Receiver",
  "📝": "Memo",
  "📜": "Scroll",
  "📚": "Books",
  "📙": "Orange Book",
  "📘": "Blue Book",
  "📗": "Green Book",
  "📖": "Open Book",
  "📕": "Closed Book",
  "📔": "Notebook with Decorative Cover",
  "📓": "Notebook",
  "📒": "Ledger",
  "📑": "Bookmark Tabs",
  "📐": "Triangular Ruler",
  "📏": "Straight Ruler",
  "📎": "Paperclip",
  "📍": "Round Pushpin",
  "📌": "Pushpin",
  "📋": "Clipboard",
  "📊": "Bar Chart",
  "📉": "Chart Decreasing",
  "📈": "Chart Increasing",
  "📇": "Card Index",
  "📆": "Tear-Off Calendar",
  "📅": "Calendar",
  "📄": "Page Facing Up",
  "📃": "Page with Curl",
  "📂": "Open File Folder",
  "📁": "File Folder",
  "📀": "DVD",
  "💿": "Optical Disk",
  "💾": "Floppy Disk",
  "💽": "Computer Disk",
  "💻": "Laptop",
  "💸": "Money with Wings",
  "💷": "Pound Banknote",
  "💶": "Euro Banknote",
  "💵": "Dollar Banknote",
  "💴": "Yen Banknote",
  "💳": "Credit Card",
  "💰": "Money Bag",
  "💣": "Bomb",
  "💡": "Light Bulb",
  "💎": "Gem Stone",
  "💌": "Love Letter",
  "💊": "Pill",
  "💉": "Syringe",
  "💈": "Barber Pole",
  "🏺": "Amphora",
  "🏷️": "Label",
  "🏮": "Red Paper Lantern",
  "🎥": "Movie Camera",
  "🎞️": "Film Frames",
  "🎛️": "Control Knobs",
  "🎚️": "Level Slider",
  "🎙️": "Studio Microphone",
  "🎐": "Wind Chime",
  "🎏": "Carp Streamer",
  "🎎": "Japanese Dolls",
  "🎊": "Confetti Ball",
  "🎉": "Party Popper",
  "🎈": "Balloon",
  "🎁": "Wrapped Gift",
  "🎀": "Ribbon",
  "🌡️": "Thermometer",
  "⛱️": "Umbrella on Ground",
  "⛏️": "Pick",
  "⚱️": "Funeral Urn",
  "⛓️": "chain",
  "⚰️": "Coffin",
  "⚙️": "Gear",
  "⚗️": "Alembic",
  "⚖️": "Balance Scale",
  "⚔️": "Crossed Swords",
  "⚒️": "Hammer and Pick",
  "✒️": "Black Nib",
  "✏️": "Pencil",
  "✉️": "Envelope",
  "✂️": "Scissors",
  "☎️": "Telephone",
  "⌨️": "Keyboard",
  "⌛": "Hourglass Done",
  "​👟": "Running Shoe",
  "​🥾": "Hiking Boot",
  "​🥿": "Flat Shoe",
  "​👠": "High-Heeled Shoe",
  "​👡": "Sandal",
  "​🩰": "Ballet Shoes",
  "​👢": "Boots",
  "​👑": "Crown",
  "👒": "Hat",
  "​🎩": "Top Hat",
  "​🎓": "Graduation Cap",
  "​🧢": "Billed Cap",
  "​⛑": "Rescue Worker Helmet",
  "​💍": "Ring",
  "⌚": "Watch",
  "⏲️": "Timer Clock",
  "⏱️": "Stopwatch",
  "⏳": "Hourglass Not Done",
  "⏰": "Alarm Clock",
  "👓": "Glasses",
  "​🕶": "Sunglasses",
  "​🥽": "Goggles",
  "🥼": "Lab Coat",
  "🥋": "Martial Arts Uniform",
  "​🦺": "Safety Vest",
  "​👔": "Necktie",
  "​👕": "Tshirt",
  "​👖": "Jeans",
  "​🧣": "Scarf",
  "​🧤": "Gloves",
  "​🧥": "Coat",
  "​🧦": "Socks",
  "​👗": "Dress",
  "​👘": "Kimono",
  "​🥻": "Saree",
  "​🩱": "Swimsuit",
  "​🩳": "Shorts",
  "👚": "Shirt",
  "​👛": "Purse",
  "​👜": "Handbag",
  "​👝": "Clutchbag",
  "​🛍": "Shopping Bags",
  "​🎒": "Backpack",
  "​👞": "Shoe"

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
