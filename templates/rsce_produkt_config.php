<?php

return array(
    'label' => array('Produkt', 'Meine Beschreibung...'),
    'types' => array('content', 'module'),
    'contentCategory' => 'texts',
    'moduleCategory' => 'miscellaneous',
    'beTemplate' => 'be_wildcard',
    'standardFields' => array('headline', 'cssID'),
    'wrapper' => array(
        'type' => 'none',
    ),
    'fields' => array(
        'product_title' => array(
            'label' => array('Produkt Name', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'description' => array(
            'label' => array('Beschreibung', 'Beschreibung...'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
        'dk' => array(
            'label' => array('DK', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'cereal type' => array(
            'label' => array('Getreideart', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'dosage' => array(
            'label' => array('Dosierung %', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'bio' => array(
            'label' => array('Bio ', 'Beschreibung...'),
            'inputType' => 'select',
            'options' => array(
                'ja',
                'Nein'
            )
        ),
        'smell' => array(
            'label' => array('Geruch Geschmack ', 'Beschreibung...'),
            'inputType' => 'select',
            'options' => array(
                '0',
                '*',
                '**',
                '***'
            )
        ),
        'frische' => array(
            'label' => array('Frischhaltung ', 'Beschreibung...'),
            'inputType' => 'select',
            'options' => array(
                '0',
                '*',
                '**',
                '***'
            )
        ),
        'volume' => array(
            'label' => array('Backvolumen ', 'Beschreibung...'),
            'inputType' => 'select',
            'options' => array(
                '0',
                '*',
                '**',
                '***'
            )
        ),
        'light_bun' => array(
            'label' => array('Brötchen Weizenbrot hell ', 'Beschreibung...'),
            'inputType' => 'select',
            'options' => array(
                '0',
                '*',
                '**',
                '***'
            )
        ),
        'special_bun' => array(
            'label' => array('Spezial/Körnerbrötchen', 'Beschreibung...'),
            'inputType' => 'select',
            'options' => array(
                '0',
                '*',
                '**',
                '***'
            )
        ),
        'wheat_bread' => array(
            'label' => array('Weizenmischbrot ', 'Beschreibung...'),
            'inputType' => 'select',
            'options' => array(
                '0',
                '*',
                '**',
                '***'
            )
        ),
        'rye_bread' => array(
            'label' => array('Roggenmischbrot', 'Beschreibung...'),
            'inputType' => 'select',
            'options' => array(
                '0',
                '*',
                '**',
                '***'
            )
        ),
        'grain_bread' => array(
            'label' => array('Spezial/Körnerbrot ', 'Beschreibung...'),
            'inputType' => 'select',
            'options' => array(
                '0',
                '*',
                '**',
                '***'
            )
        ),
        'decor' => array(
            'label' => array('Dekor geeignet ', 'Beschreibung...'),
            'inputType' => 'select',
            'options' => array(
                'ja',
                'Nein'
            )
        ),
        'aromas' => array(
            'label' => array('Aromen', 'Beschreibung...'),
            'inputType' => 'text',
        ),
        'ebc' => array(
            'label' => array('EBC', 'Beschreibung...'),
            'inputType' => 'text',
        ),



    ),
);
