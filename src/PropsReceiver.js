function PropsReceiver(props) {

    const buyCourse = (id) => {
console.log('buy', id);
    };

    return (
        <div className='PropsReceiver'>
            <div>Site name: {props.siteName}</div>
            <div>Version: {props.version}</div>
            <div>Visibility: {props.isPublic ? 'Public' : 'Private'}</div>
            <div>Owner: {props.owner.name} {props.owner.phone}</div>

            <ul>
                {props.courses.map(el => (
                    <li key={el.id}>
                        <strong>{el.title}</strong>, price: ${el.price}
                        <button onClick={() => buyCourse(el.id)}>Buy</button>
                    </li>
                ))}
            </ul>


        </div>
    );
}

export default PropsReceiver;