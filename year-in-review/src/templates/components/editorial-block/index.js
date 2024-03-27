import { h } from 'preact';

export const EditorialBlock = ({ children, type }) => {

    return <div class="wrap">
                <div class="row">
                    <div class={"editorial-block" + ((type) ? " editorial-block--"+type : "")}>
                        <div class="editor">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
}

export default EditorialBlock;