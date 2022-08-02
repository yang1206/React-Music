import { lazy } from 'react'
import { RouteObject } from '@/routers/interface'
import lazyLoad from '@/routers/utils/lazyLoad'
import Recommend from '@/views/discover/components/recommend'
const HomeRouter: Array<RouteObject> = [
  {
    path: '/discover',
    element: <Recommend />
  },
  {
    path: '/discover/songs',
    element: lazyLoad(lazy(() => import('@/views/discover/components/songs')))
  },
  {
    path: '/discover/album',
    element: lazyLoad(lazy(() => import('@/views/discover/components/album')))
  },
  {
    path: '/discover/djradio',
    element: lazyLoad(lazy(() => import('@/views/discover/components/djradio')))
  },
  {
    path: '/discover/ranking',
    element: lazyLoad(lazy(() => import('@/views/discover/components/ranking')))
  },
  {
    path: '/discover/artist',
    element: lazyLoad(lazy(() => import('@/views/discover/components/artist')))
  }
]

export default HomeRouter
