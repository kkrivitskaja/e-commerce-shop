import DOMPurify from 'dompurify';

const parseHTML = (htmlString, styleName) => {
    const cleanHTML = (
        <div
            className={styleName}
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(htmlString),
            }}
        />
    );
    return cleanHTML;
};

export default parseHTML;
