import create from 'zustand';

export interface StoreProps {
  accountOpeningData: any;
  surveyQuestion: any;
  setSurveyQuestion: (data: any) => void;
  isAnonymous: any;
  setIsAnonymous: any;
  feedItem: any;
  setFeedItem: (data: any) => void;
  setAccountOpeningData: (data: any) => void;
  setBvnData: (data: any) => void;
  tierOneSuccess: any;
  setTierOneSuccess: (data: any) => void;
  userData: any;
  bvnData: any;
  setUserData: (data: any) => void;
}

const useStore = create<StoreProps>((set) => ({
  accountOpeningData: {},
  surveyQuestion: {},
  setSurveyQuestion: (data: any) => set((state) => ({ isAnonymous: data })),
  tierOneSuccess: { isSuccess: false, content: '' },
  userData: {},
  isAnonymous: {},
  setIsAnonymous: (data: any) => set((state) => ({ isAnonymous: data })),
  feedItem: {},
  setFeedItem: (data: any) => set((state) => ({ isAnonymous: data })),
  bvnData: {},
  setAccountOpeningData: (data: any) =>
    set((state) => ({ accountOpeningData: data })),
  setBvnData: (data: any) => set((state) => ({ bvnData: data })),
  setTierOneSuccess: (data: any) => set((state) => ({ tierOneSuccess: data })),
  setUserData: (data: any) => set((state) => ({ userData: data })),
}));

export default useStore;
