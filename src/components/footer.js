import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return (
            
            <div>
                <div>FOOTER WORKS!</div>
                <div>
                    <ul>
                        <li>Convert <a target='_blank' href='/xml2json'>XML to JSON</a></li>
                        <li>Convert <a target='_blank' href='/json2xml'>JSON to XML</a></li>
                    </ul>
                </div>
            </div>

        )
    }
}
export default Footer;