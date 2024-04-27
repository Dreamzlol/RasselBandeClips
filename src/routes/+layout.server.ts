import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    const broadcasters = [
        {
            userName: 'Knirpz',
            broadcasterId: '529112648',
            avatarSrc: 'https://static-cdn.jtvnw.net/jtv_user_pictures/4fd0f679-952e-4ff4-a725-fbdb3bff574f-profile_image-70x70.png',
            avatarAlt: 'knirpz',
            gradientClass: 'from-yellow-600 to-yellow-200',
            link: '/clips-of-the-month/knirpz'
        },
        {
            userName: 'RonnyBerger',
            broadcasterId: '531019578',
            avatarSrc: 'https://static-cdn.jtvnw.net/jtv_user_pictures/029c4ead-9a5d-4c23-ad93-41e6b6326dbb-profile_image-70x70.png',
            avatarAlt: 'ronnyberger',
            gradientClass: 'from-purple-600 to-purple-200',
            link: '/clips-of-the-month/ronnyberger'
        },
        {
            userName: 'daefoxi',
            broadcasterId: '451635946',
            avatarSrc: 'https://static-cdn.jtvnw.net/jtv_user_pictures/816f9be9-b34d-44d9-8d89-49b84b669201-profile_image-70x70.png',
            avatarAlt: 'daefoxi',
            gradientClass: 'from-pink-600 to-pink-200',
            link: '/daefoxi'
        },
        {
            userName: 'ZeusSpezial',
            broadcasterId: '147118536',
            avatarSrc: 'https://static-cdn.jtvnw.net/jtv_user_pictures/39a738f3-ca86-4478-96ce-5a2e92ead87b-profile_image-70x70.png',
            avatarAlt: 'zeusspezial',
            gradientClass: 'from-blue-600 to-blue-200',
            link: '/zeusspezial'
        },
        {
            userName: 'EinSebastian',
            broadcasterId: '427135151',
            avatarSrc: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1def2d40-4495-4f55-812c-04978231b6f2-profile_image-70x70.png',
            avatarAlt: 'einsebastian',
            gradientClass: 'from-red-600 to-red-200',
            link: '/einsebastian'
        },
        {
            userName: 'Mystery_Blue',
            broadcasterId: '90631404',
            avatarSrc: 'https://static-cdn.jtvnw.net/jtv_user_pictures/93d0fa70-49e6-4bdd-b0ef-1a1d12a74116-profile_image-70x70.png',
            avatarAlt: 'mystery_blue',
            gradientClass: 'from-green-600 to-green-200',
            link: '/mysteryblue'
        }
    ];

    return { broadcasters };
}) satisfies LayoutServerLoad;

