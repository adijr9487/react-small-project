import classes from "./Add.css"

export default function Add(width, buttonClick, isAdd=true){

  return (<svg className={isAdd ? classes.Add : classes.Cancel} xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 261 261">
      <defs>
        <filter id="Ellipse_3" x="0" y="0" width="261" height="261" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="10" result="blur"/>
          <feFlood floodOpacity="0.161"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Union_3" x="79.811" y="83.45" width="101.311" height="101.312" filterUnits="userSpaceOnUse">
          <feOffset dy="3" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="10" result="blur-2"/>
          <feFlood floodOpacity="0.161"/>
          <feComposite operator="in" in2="blur-2"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g className={classes.boudary} onClick={buttonClick} id="Group_4" data-name="Group 4" transform="translate(-830 -377)">
        <g transform="matrix(1, 0, 0, 1, 830, 377)" filter="url(#Ellipse_3)">
          <circle id="Ellipse_3-2" data-name="Ellipse 3" cx="109.5" cy="109.5" r="109.5" transform="translate(21 21)" fill="#fff"/>
        </g>
        <g transform="matrix(1, 0, 0, 1, 830, 377)" filter="url(#Union_3)">
          <g className={classes.Cross} id="Union_3" data-name="Union 3" transform="translate(88.81 89.45)" >
            <path d="M 53.52767181396484 82.81168365478516 L 29.78206253051758 82.81168365478516 L 29.78206253051758 54.02865982055664 L 29.78206253051758 53.52865982055664 L 29.28206253051758 53.52865982055664 L 0.5000067949295044 53.52865982055664 L 0.5000067949295044 29.78301620483398 L 29.28206253051758 29.78301620483398 L 29.78206253051758 29.78301620483398 L 29.78206253051758 29.28301620483398 L 29.78206253051758 0.5000047087669373 L 53.52767181396484 0.5000047087669373 L 53.52767181396484 29.28301620483398 L 53.52767181396484 29.78301620483398 L 54.02767181396484 29.78301620483398 L 82.81055450439453 29.78301620483398 L 82.81055450439453 53.52865982055664 L 54.02767181396484 53.52865982055664 L 53.52767181396484 53.52865982055664 L 53.52767181396484 54.02865982055664 L 53.52767181396484 82.81168365478516 Z" stroke="none"/>
          </g>
        </g>
      </g>
    </svg>
        )
}


