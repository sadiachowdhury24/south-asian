import React from 'react'




function Diary() {
   
    return (
       
        <>
        
          


            <section class="section journal-section">
                <div class="container">
                    <div class="container-row container-row-journal">
                        <div class="container-item container-item-journal">
                            <form id="entryForm" action="">
                                <label for="entry-title" class="journal-label">Entry Title</label>
                                

                                <input
                                    type="text"
                                    name="entry-title"
                                    id="entry-title"
                                    class="entry-text-title"
                                    placeholder="Name of entry ✏️" />
                                
                                <label for="entry" class="journal-label">Today's Entry</label>
                                <textarea
                                    name="daily-entry"
                                    id="entry"
                                    class="entry-text-box"
                                    placeholder="Rant all you want here 💭"
                                ></textarea>
                                <button class="btn-main entry-submit-btn" type="submit">Done Ranting</button>
                                <script>
                                   
                                        const entryForm = document.querySelector(`#entryForm`);
                                        const entryResultsSection = document.querySelector(`#entryResultsSection`);
                                        const entryResultItem = document.querySelector(`.entryResultItem`);
                                        const entryResultRow = document.querySelector(`.entryResultRow`);
                                        const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
                                        const getEntryText = document.getElementsByClassName(`entry-text-box`);

                                </script>

                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <section class="section sectionEntryResults" id="entryResultsSection">
                <div class="container">
                    <div class="container-row entryResultRow"></div>
                </div>
            </section>

            <script type="text/javascript" src= "/Diary/script.js"></script>
            



        </>
   
    )
    
}

export default Diary
