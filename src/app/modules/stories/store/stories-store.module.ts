import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoriesEffects} from "./stories.effects";
import * as fromStories from "./stories.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature(fromStories.storiesFeatureKey, fromStories.reducer),
    EffectsModule.forFeature([StoriesEffects])
  ],
  exports: [
    StoreModule,
    EffectsModule,
  ]
})

export class StoriesStoreModule {
}
