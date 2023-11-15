
const Button = ({text,outline, onClick}) => {
  return (
      <button className={`px-4 sm:px-8 py-4 sm:py-4
      ${outline? 'rounded-lg ring-1 ring-RedDarkest hover:bg-RedDarkest/10'
        :
     'bg-RedDarkest rounded-lg hover:bg-red-900  transition-transform'}
      `} onClick={onClick}>
        {text}
      </button>
  )
}

export default Button