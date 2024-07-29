export default function MainButton(props){
    return(<>
        <button type="button" className="w-full bg-highlight text-white-secondary 
        shadow-md rounded-lg p-4 text-xl font-medium hover:bg-blue-600">
            {props.action}
        </button>
    </>)
}