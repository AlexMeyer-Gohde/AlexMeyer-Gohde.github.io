---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  #- block: skills
  #  content:
  #    title: Skills
  #    text: ''
  #    # Choose a user to display skills from (a folder name within `content/authors/`)
  #    username: admin
  #  design:
  #    columns: '1'
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Professor of Financial Markets and Macroeconomics
          company: Goethe University Frankfurt
          company_url: 'https://www.wiwi.uni-frankfurt.de/en/home.html'
          company_logo: Goethe
          location: Frankfurt, Germany
          date_start: '2018-04-01'
          date_end: ''
          description: |2-
              Management of chair, research, teaching at all levels BSc/MSc/PhD, participation in university self-administration
        - title: IMFS Professor
          company: Institute for Monetary and Financial Stability (IMFS)
          company_url: 'https://www.imfs-frankfurt.de/en/'
          company_logo: IMFS_Logo
          location: Frankfurt, Germany
          date_start: '2018-04-01'
          date_end: ''
          description: |2-
              Fulfill the main objective of the institute: the implementation of the "Project Monetary and Financial Stability" that is supported by the Foundation for Monetary and Financial Stability (Stiftung Geld und Währung). This includes raising public awareness of the importance of monetary and financial stability through the public and target group-oriented activities of the institute as well as interdiscipinary research and teaching. 
        - title: Visiting Professor of Economics – Growth and Business Cycles
          company: University of Hamburg
          company_url: 'https://www.wiso.uni-hamburg.de/fachbereich-vwl/professuren/lucke.html'
          company_logo: UHH
          location: Frankfurt, Germany
          date_start: '2014-10-01'
          date_end: '2018-03-31'
          description: |2-
              Long-term susbtitute for the chain of Growth and Business Cycles
              Independent management of chair, research, teaching at all levels BSc/MSc/PhD, participation in university self-administration
        - title: Postdoctoral Assistant
          company: Humboldt University of Berlin
          company_url: 'https://www.wiwi.hu-berlin.de/de/professuren/vwl/wtm2/mitarbeiter/burda/prof-michael-burda-phd'
          company_logo: Huberlin
          location: Berlin, Germany
          date_start: '2010-08-01'
          date_end: '2014-09-30'
          description: Teaching, research, and supervision assisstance at the chair of Prof. Dr. h.c. Michael C. Burda, Ph.D.
        - title: Academic Assistant
          company: Technical University of Berlin
          company_url: 'https://www.tu.berlin/macroeconomics/team/prof-dr-frank-heinemann'
          company_logo: TU-Berlin
          location: Berlin, Germany
          date_start: '2006-11-01'
          date_end: '2010-07-31'
          description: Teaching and research assisstance at the chair of Prof. Dr. Frank Heinemann
        - title: Academic Assistant
          company: Potsdam Institute for Climate Impact Research
          company_url: ''
          company_logo: PIK
          location: Potsdam, Germany
          date_start: '2006-04-01'
          date_end: '2006-10-31'
          description: Integrated modern dynamic stochastic general equilibrium (DSGE) macroeconomic modelling components into joint climate-economic models. Research assisstance for Prof. Dr. Carlo C. Jaeger
    design:
      columns: '2'
  - block: accomplishments
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Accomplish&shy;ments'
      subtitle:
      # Date format: https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - date_end: '2024-11-14'
          date_start: '2021-11-15'
          description: ''
          icon: dfg
          organization: German Research Foundation (DFG)
          organization_url: https://www.dfg.de
          title: Numerical diagnostics and improvements for the solution of linear dynamic macroeconomic models 
          url: 'https://gepris.dfg.de/gepris/projekt/465469938?language=en'
          description: Individual research grant
        - date_end: '2023-03-31'
          date_start: '2022-04-01'
          description: Integration of interactive teaching and learning modules of Matlab in PMAK 
          icon: stiftung_hochschullehre_logo
          organization: DigiTeLL / Stiftung Innovation in der Hochschullehre
          organization_url: https://stiftung-hochschullehre.de/projekt/digitell/
          title: MatlabMakro
          url: https://www.goethe-university-frankfurt.de/122966160/Partnerships#MatlabMakro
    design:
      columns: '2'
  - block: experience
    content:
      title: Education
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Doctor rer. oec. (Ph.D. in Economics) summa cum laude
          company: Technical University of Berlin
          company_url: ''
          company_logo: TU-Berlin
          location: Berlin, Germany
          date_start: '2006-10-01'
          date_end: '2010-10-31'
          description: |2-
             Dissertation advisor: Prof. Dr. Frank Heinemann
             link: https://depositonce.tu-berlin.de/items/4531f2af-db40-4d0c-ad25-48011ea7c003
        - title: Master of Arts in Economics and Management Sciences
          company: Humboldt University of Berlin
          company_url: ''
          company_logo: Huberlin
          location: Berlin, Germany
          date_start: '2002-10-01'
          date_end: '2006-04-30'
          description: |2-
             Dissertation advisor: Prof. Dr. Frank Heinemann

              * Analysing
              * Modelling
              * Deploying
        - title: Bachelor of Arts cum laude in Language, Literature & Culture
          company: Colorado State University
          company_url: ''
          company_logo: CSU_logo
          location: Fort Collins, Colorado, USA
          date_start: '1999-08-30'
          date_end: '2001-12-31'
          description: |2-
             Minor in Economics

              * Analysing
              * Modelling
              * Deploying
    design:
      columns: '2'
  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Deep Learning
          tag: Deep Learning
        - name: Other
          tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  - block: markdown
    content:
      title: Gallery
      subtitle: ''
      text: |-
        {{< gallery album="demo" >}}
    design:
      columns: '1'
  - block: collection
    id: featured
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - event
    design:
      columns: '2'
      view: compact
  - block: tag_cloud
    content:
      title: Popular Topics
    design:
      columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis ut magna et, vehicula efficitur enim.
      # Contact (add or remove contact options as necessary)
      email: test@example.org
      phone: 888 888 88 88
      appointment_url: 'https://calendly.com'
      address:
        street: 450 Serra Mall
        city: Stanford
        region: CA
        postcode: '94305'
        country: United States
        country_code: US
      directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      office_hours:
        - 'Monday 10:00 to 13:00'
        - 'Wednesday 09:00 to 10:00'
      # Choose a map provider in `params.yaml` to show a map from these coordinates
      coordinates:
        latitude: '37.4275'
        longitude: '-122.1697'  
      contact_links:
        - icon: twitter
          icon_pack: fab
          name: DM Me
          link: 'https://twitter.com/Twitter'
        - icon: skype
          icon_pack: fab
          name: Skype Me
          link: 'skype:echo123?call'
        - icon: video
          icon_pack: fas
          name: Zoom Me
          link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '2'
---
