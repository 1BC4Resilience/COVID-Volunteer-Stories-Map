var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiaWFub2QiLCJhIjoiY2s5MzBnMWVzMDBoazNsczFwNDU3MDhzdCJ9.m-pcCq-j4Y0y717DBXF_Qw',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'COVID Volunteer Stories',
    subtitle: 'Storeis from IFRC volunteers around the world on how they are addressing COVID-19',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'A coffee filter as a mask',
            image: '',
            description: 'Medhi is homeless and suffers from lung cancer when the round of the French Red Cross meets him. He fears for his life and the lives of others, which is why he made a makeshift mask for himself, using a coffee filter, taped to his skin. Volunteers of the French Red Cross, learning of his condition, exercise extra caution and fear of contaminating him. They know it would be fatal to him. "The marginalized are even more marginalized" confirms Mehi, seated on a bench, in a deserted city that resounds with a macabre silence. Fortunately, a bit later, when our two Red Cross volunteers help another homeless man, this silence is broken by the thousands of applause in honor of the medical staff. <div id=""fb-root""></div><script async=""1"" defer=""1"" crossorigin=""anonymous"" src=""https://connect.facebook.net/en_GB/sdk.js#xfbml=1&amp;version=v6.0""></script><div class=""fb-video"" data-href=""https://www.facebook.com/757915144314007/videos/2975020585853934"" data-width=""1080""><blockquote cite=""https://www.facebook.com/757915144314007/videos/2975020585853934/"" class=""fb-xfbml-parse-ignore""></blockquote></div>',
            location: {
                center: [46.227638, 2.213749],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'This virus brought people together much more than it separated them',
            image: './path/to/image/source.png',
            description: 'First of all, thank you for the opportunity to share experiences. My experience is very particular because I am creating a youth group in the midst of this confusion related to this pandemic. <p>In fact, the experience is being positive, after some attempts to gather a young group of volunteers, contrary to what I thought, I was more easily able to gather a good group of volunteers who joined for this purpose.</p><p>I learned that this virus brought people together much more than it separated them, and united them for a cause, for a common purpose. That makes me very satisfied and proud. Volunteering in this situation made me feel truly useful as I had never felt in any previous volunteering. In the region where I am, the red cross was getting erased, and despite the whole situation, we are managing to reactivate the volunteering of the local red cross, with this return to the origins, where we gathered the community to help in times of war.</p> <p>We are achieving with our work aimed at the elderly and vulnerable to transmit hope and confidence to overcome this phase. We continue to try daily to provide support in all needs so that people can feel supported.</p><p>The main challenge to deal with is fear, ours and that of the people we support, however, we must continue to transmit security.</p>',
            location: {
                center: [40.463667, -3.74922],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
