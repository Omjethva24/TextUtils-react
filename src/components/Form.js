import React,{ useState }  from 'react'

export default function Form() {
    const [text, setText] = useState("");
    const changetoup = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const changetolo = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
    }
    const newLine = () => {
        let newtext = text.replaceAll(".",".\n")
        setText(newtext)
        
    }
    const clear = () => {
        let newtext = ""
        setText(newtext)
        
    }
    const onchangee = (e) => {
        setText(e.target.value)
    }
    const copy = (e) => {
        
        navigator.clipboard.writeText(text)
        alert("your Text Is copied.")

    }
    const trim = (e) => {
        let newText=text.replace(/\s+/g," ")
        setText(newText)
        

    }
    
  return (
    <div className="container">

        <h1 className='text-center'>TextUtils</h1>
        <textarea name="" value={text}  id="textt" cols="25" rows="15" className='form-control' onChange={onchangee}></textarea>
        <p>Character: {text.replace(/\s+/g,"").length} Words: {text.split(" ").filter((ele)=>{return ele.length!==0}).length} 
            
        </p>
        <button className='btn btn-primary my-3 mx-3' onClick={changetoup} >Change to UpperCase</button>
        <button className='btn btn-primary my-3 mx-3' onClick={changetolo} >Change to LowerCase</button>
        <button className='btn btn-primary my-3 mx-3' onClick={newLine} >New Line After "."</button>
        <button className='btn btn-primary my-3 mx-3' onClick={trim} >Remove Extra Spaces</button>
        <button className='btn btn-primary my-3 mx-3' onClick={copy} >Copy Text</button>
        <button className='btn btn-danger my-3 mx-3' onClick={clear} >Clear</button>

        <h1>Priview</h1>
        <span>{text.length===0?"Please enter any value.":text}</span>
     
    </div>
  )
}
