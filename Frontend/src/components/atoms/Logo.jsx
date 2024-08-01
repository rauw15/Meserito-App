function Logo(){
    return(
        <div className="div-logo">
            <div class="logo-image-container relative p-md lg:p-ms flex-grow">
                <div class="image-container min-h-0 md:min-h-xs h-full flex-grow" data-testing-id="edit-brand-mockup-img">
                    <div class="w-64 md:w-80 h-full m-auto">
                        <div class="logo-image relative flex flex-col  w-full h-full">
                            <div class="logo-mockup flex max-w-full max-h-full m-auto  " aria-label="Logo">
                                <img class="logo-img" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/971/8678726971_bd4fdd30-72fb-46fd-9817-a1acd703ef0e.png?cb=1698992907" alt="" role="none"/>
                            </div>
                            <div class="absolute bg-transparent h-full w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default Logo;