import PropsReceiver from "./PropsReceiver";

function PropsSending() {
    const siteName = 'LocalCoding';
    const version = 2;
    const isPublic = true;
    const owner = {
        name: 'PASV',
        zip: '456456',
        phone: '456-456-46'
    }

    const courses = [
        {
            id: '1',
            title: 'JS',
            price: 123
        },
        {
            id: '2',
            title: 'React',
            price: 234
        },
        {
            id: '3',
            title: 'QA',
            price: 345
        }
    ]

    return (
        <div className="PropsSending">
            <PropsReceiver
                siteName={siteName}
                version={version}
                isPublic={isPublic}
                owner={owner}
                courses={courses}
            />
        </div>
    );
}

export default PropsSending;