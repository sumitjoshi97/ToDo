import React from 'react';

const styles = {
    backgroundColor: '#222',
    color: '#FFF',
    padding: '8px',
    clear: 'left'
}

const Footer = () => {
    return (
        <div style={styles}>
            <h2>-created by <a href="https://github.com/sumitjoshi97/todo" target="_blank">@Sumit-Joshi</a></h2>
        </div>
    );
}

export default Footer;