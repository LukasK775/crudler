import { ScrollView, StyleSheet } from "react-native";
import Screen from "../layout/Screens";
import ModuleList from "../entity/modules/ModuleList.js";
import initialModules from "../../data/modules.js";

const ModuleListScreen = () => {
  // Initialisations
  const modules = initialModules;

  // State

  // Handlers
  const handleSelect = (module) => alert(`Item ${module.ModuleCode} Selected`);

  // View
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
  },
});

export default ModuleListScreen;
