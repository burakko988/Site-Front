import MultipleSelectPlaceholder from './select'
import BasicTextFields from './text'

export default function FilterComponent() {
  return (
    <div style={{display:"flex",justifyContent:"center",margin:"3% 30%",position:"absolute",zIndex:1}}>
        <div style={{width:"70%"}}>
        <BasicTextFields/>
        </div>
        <div style={{width:"40%",marginLeft:"10px"}}>
        <MultipleSelectPlaceholder/>
        </div>
    </div>
  )
}
