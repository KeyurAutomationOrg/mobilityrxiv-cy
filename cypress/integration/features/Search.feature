Feature: Execute Search 

    Scenario: Search for pre-prints by a term
        Given the user has navigated to the URL "https://mobilityrxiv.sae.org/"
        When the user searches for "SAE-PP-00223"
        And the user clicks on the first result
        Then the id "SAE-PP-00223" is present under the title

        
