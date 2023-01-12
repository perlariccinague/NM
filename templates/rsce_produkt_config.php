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
            'label' => array('Produkt Name'),
            'inputType' => 'text'
        ),
        'description' => array(
            'label' => array('Beschreibung'),
            'eval' => array('rte' => 'tinyMCE'),
            'inputType' => 'textarea',
        ),
        'dk' => array(
            'label' => array('DK'),
            'inputType' => 'text',
          'eval' => Array('tl_class' => 'w50')
        ),
        'cerealType' => array(
            'label' => array('Getreideart'),
            'inputType' => 'select',
          'options' => array(
            'Weizen',
            'Roggen',
            'Gerste',
            'Dinkel',
            'Keine'
          ),
          'eval' => Array('tl_class' => 'w50')
        ),
        'dosageFrom' => array(
            'label' => array('Dosierung von %'),
            'inputType' => 'text',
          'eval' => Array('tl_class' => 'w50')
        ),
        'dosageTo' => array(
            'label' => array('Dosierung Bis %'),
            'inputType' => 'text',
            'eval' => Array('tl_class' => 'w50')
        ),
        'bio' => array(
            'label' => array('Bio '),
            'inputType' => 'checkbox',
            'eval' => Array('tl_class' => 'w50'),

        ),
        'eval' => Array('tl_class' => 'w50'),
        'smell' => array(
            'label' => array('Geruch Geschmack '),
            'inputType' => 'select',
            'options' => array(
                'nicht geeignet' => '0',
                'wenig geeignet' => '*',
                'geeignet' => '**',
                'gut geeignet' => '***',
            ),
          'eval' => Array('tl_class' => 'w50')
        ),
        'frische' => array(
            'label' => array('Frischhaltung '),
            'inputType' => 'select',
            'options' => array(
                'nicht geeignet' => '0',
                'wenig geeignet' => '*',
                'geeignet' => '**',
                'gut geeignet' => '***',
            ),
          'eval' => Array('tl_class' => 'w50')
        ),
        'volume' => array(
            'label' => array('Backvolumen'),
            'inputType' => 'select',
            'options' => array(
                'nicht geeignet' => '0',
                'wenig geeignet' => '*',
                'geeignet' => '**',
                'gut geeignet' => '***',
            ),
          'eval' => Array('tl_class' => 'w50')
        ),
        'light_bun' => array(
            'label' => array('Brötchen Weizenbrot hell '),
            'inputType' => 'select',
            'options' => array(
                'nicht geeignet' => '0',
                'wenig geeignet' => '*',
                'geeignet' => '**',
                'gut geeignet' => '***',
            ),
          'eval' => Array('tl_class' => 'w50')
        ),
        'special_bun' => array(
            'label' => array('Spezial/Körnerbrötchen'),
            'inputType' => 'select',
            'options' => array(
                'nicht geeignet' => '0',
                'wenig geeignet' => '*',
                'geeignet' => '**',
                'gut geeignet' => '***',
            ),
          'eval' => Array('tl_class' => 'w50')
        ),
        'wheat_bread' => array(
            'label' => array('Weizenmischbrot '),
            'inputType' => 'select',
            'options' => array(
                'nicht geeignet' => '0',
                'wenig geeignet' => '*',
                'geeignet' => '**',
                'gut geeignet' => '***',
            ),
          'eval' => Array('tl_class' => 'w50')
        ),
        'rye_bread' => array(
            'label' => array('Roggenmischbrot'),
            'inputType' => 'select',
            'options' => array(
                'nicht geeignet' => '0',
                'wenig geeignet' => '*',
                'geeignet' => '**',
                'gut geeignet' => '***',
            ),
          'eval' => Array('tl_class' => 'w50')
        ),
        'grain_bread' => array(
            'label' => array('Spezial/Körnerbrot '),
            'inputType' => 'select',
            'options' => array(
                'nicht geeignet' => '0',
                'wenig geeignet' => '*',
                'geeignet' => '**',
                'gut geeignet' => '***',
            ),
          'eval' => Array('tl_class' => 'w50')
        ),
        'decor' => array(
            'label' => array('Dekor geeignet '),
            'inputType' => 'checkbox',
          'eval' => Array('tl_class' => 'w50')
        ),
        'aromas' => array(
            'label' => array('Aromen'),
            'inputType' => 'text',
          'eval' => Array('tl_class' => 'w50')
        ),
        'image' => array(
            'label' => array('Bild', ''),
            'eval' => array(
                'filesOnly' => true,
                'tl_class' => 'clr'
            ),
            'inputType' => 'fileTree'
        ),
        'ebc' => array(
            'label' => array('EBC'),
            'inputType' => 'text',
          'eval' => Array('tl_class' => 'w50')
        ),
        'lab_pce_l' => array(
            'label' => array('LAB PCE: L'),
            'inputType' => 'text',
          'eval' => Array('tl_class' => 'w50')
        ),
        'lab_pce_a' => array(
            'label' => array('LAB PCE: A'),
            'inputType' => 'text',
          'eval' => Array('tl_class' => 'w50')
        ),
        'lab_pce_b' => array(
            'label' => array('LAB PCE: B'),
            'inputType' => 'text',
          'eval' => Array('tl_class' => 'w50')
        ),
        'file' => array(
            'label' => array('DOWNLOAD', ''),
            'inputType' => 'fileTree',
            'eval' => array(
                'filesOnly' => true,
                'isDownloads'=> true,
                'extensions' => 'pdf',
               'tl_class' => 'clr'

            ),

        ),

    ),
);
