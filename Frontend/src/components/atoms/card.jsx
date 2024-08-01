export default function Card({classDiv, subtitle, src, classP, msgP}){
    return(
        <div className={classDiv}>
            <h2>{subtitle}</h2>
            <img src={src}/>
            <p className={classP}>{msgP}</p>
        </div>
    );
}
