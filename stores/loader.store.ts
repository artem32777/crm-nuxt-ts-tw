export const useLoaderStore = defineStore('loader',{
  state: ()=> ({isLoading: true}),
  actions: {
    show(data: boolean){
      this.$patch({isLoading: data})
    }
  }
})